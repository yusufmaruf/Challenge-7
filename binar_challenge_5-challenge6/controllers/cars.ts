import { Express, Request, Response } from "express";
import { CarsService } from "../services/cars";
import { Cars, CarsModel } from "../models/cars";
import { errorWrapper } from "../utils/errorwrapper";
import { authenticateToken, isfulladmin, isAdmin } from "../utils/auth";
import { v2 as cloudinary } from "cloudinary";
import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./dist/uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

cloudinary.config({
  cloud_name: 'dyrxqtvlr',
  api_key: '619453128699628',
  api_secret: 'fWGoGBfzVKa8INUM_HMBACFmynA'
});

interface IParams {
  [key: string]: string;
}
interface CustomFile {
  fieldname: string;
  originalname: string;
  encoding: string;
  mimetype: string;
  // Add other properties if needed
}

// Assuming UploadApiResponse has a property named 'url'
interface CustomUploadApiResponse {
  url: string;
  // Add other properties if needed
}

export  class CarsController {
  app: Express;
  service: CarsService;

  constructor(app: Express) {
    this.app = app;
    this.service = new CarsService();
  }

  init() {
    this.app.get("/cars",  (req, res) => this.getMany(req, res));
    this.app.get("/cars/:id", (req, res) => this.getOne(req, res));
    this.app.post("/cars",upload.single("image"),authenticateToken,isfulladmin, (req, res) => this.create(req, res));
    this.app.patch("/cars/:id",authenticateToken,isfulladmin, (req, res) => this.update(req, res));
    // this.app.delete("/cars/:id", (req, res) => this.del(req, res)); 
    this.app.delete("/cars/:id",authenticateToken,isfulladmin, (req, res) => this.softDelete(req, res)); 
    this.app.get("/filtered-cars", (req, res) => this.getFilteredCars(req, res));
      
  }

  async getMany(_req: Request, res: Response) {
    const result = await errorWrapper(this.service.getMany());
    return res.status(result.status).json(result.data);
  }

 async getOne(req: Request, res: Response) {
  const id = +req.params.id;
  const car = await this.service.getOne(id);

  if (!car) {
    return res.status(404).json({ message: "Car not found" });
  }

  return res.status(200).json(car);
}


  async create(req: Request<{}, {}, Cars>, res: Response) {
    try {
      const user = req.user as { id: number; role: string };
      console.log(user);

      if (!user || user.role !== 'admin') {
        return res.status(403).json({ error: 'Unauthorized - Only admins can perform this action' });
      }
  
     
      const upluodImage = req.file as CustomFile;
      
      let image: string | undefined;

      if (upluodImage) {
        const upload = await cloudinary.uploader.upload(
          path.join(__dirname, "..", "uploads", upluodImage.originalname),
          { use_filename: true, unique_filename: false, overwrite: true }
        );
        console.log(upload);

        image = (upload as CustomUploadApiResponse).url;
      }

      // Extract the user ID from the user object
      const lastModifiedById = user?.id;

      // Update last_modified_by field with the user ID
      req.body.image = image??"";
      req.body.last_modified_by = lastModifiedById;
      await this.service.create(req.body);
      return res.status(201).json({ message: 'Car created successfully' });
    } catch (error: any) {
      console.error(error);
      return res.status(500).json({ error: error.message });
    }
  }
  
 
async update(req: Request<IParams, {}, Partial<Cars>>, res: Response) {
  try {
    const id = +req.params.id;
    const body = req.body;

    // Check if req.user is defined and has the "admin" role
    const user = req.user as { id: number; role: string };
    console.log(user);

    if (!user || user.role !== 'admin') {
      return res.status(403).json({ error: 'Unauthorized - Only admins can perform this action' });
    }

    // Extract the user ID from the user object
    const lastModifiedById = user?.id;

    // Update last_modified_by field with the user ID
    body.last_modified_by = lastModifiedById;

    // Call the service to update the car
    await this.service.update(id, body);

    // Send a success response
    return res.status(200).json({ success: true, result: body });
  } catch (error) {
    // Handle errors
    console.error(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
 



 async del(req: Request<IParams>, res: Response) {
  try {
    const id = +req.params.id;
    await this.service.delete(id);
    return res.status(200).json({ message: 'Car deleted successfully' });
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' });
  }
  }
 
  async getFilteredCars(req: Request, res: Response) {
    try {
      const { date, capacity } = req.query;

      let dateObject: Date | undefined;
      if (date) {
        const dateString = String(date);
        dateObject = new Date(dateString);
        if (isNaN(dateObject.getTime())) {
          return res.status(400).json({ error: 'Invalid date format' });
        }
      }

      let parsedCapacity: number | undefined;
      if (capacity) {
        const capacityString = String(capacity);
        parsedCapacity = parseInt(capacityString, 10);
        if (isNaN(parsedCapacity)) {
          return res.status(400).json({ error: 'Invalid capacity format' });
        }
      }

      const filteredCars = await errorWrapper(this.service.getFilteredCars(dateObject, parsedCapacity));
      
      res.status(200).json(filteredCars.data);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
  async softDelete(req: Request<IParams>, res: Response) {
  try {
    const id = +req.params.id;
    const user = req.user as { id: number; role: string };
    const adminId = user?.id;

    if (!adminId) {
      return res.status(403).json({ error: 'Unauthorized - Admin ID not available' });
    }

    await this.service.softDelete(id, adminId);

    return res.status(200).json({ message: 'Car soft deleted successfully' });
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' });
  }
}
}
