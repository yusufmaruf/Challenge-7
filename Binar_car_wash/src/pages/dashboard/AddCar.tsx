import { ChangeEvent, FormEvent, useState } from 'react';
import { Card } from 'react-bootstrap';
import { httpFetch } from '../../utils/http';
import { useLocalStorage } from '../../hooks/useLocalStorage';
const BACKEND_URL = import.meta.env['VITE_BACKEND_URL']


type Car = {
  plate: string;
  manufacture: string;
  image: File | null;
  model: string;
  type: string;
  description: string;
  transmission: string;
  capacity: number;
  rentPerDay: number;
  availableAt: string;
  available: string;
  year: number;
  options: string;
  specs: string;
};

const initialState: Car = {
  plate: "",
  manufacture: "",
  image: null,
  model: "",
  type: "",
  description: "",
  transmission: "Automatic",
  capacity: 0,
  rentPerDay: 0,
  availableAt: "",
  available: "True",
  year: 0,
  options: "",
  specs: "",
};

function AddCar() {
    const [token] = useLocalStorage('token', {});
    
    const [formData, setFormData] = useState<Car>(initialState); const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
      
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "file" ? (e.target as HTMLInputElement).files?.[0] : value,
    }));
  };

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const formDataToSend = new FormData();
        
      for (const value in formData) {
        if (Object.prototype.hasOwnProperty.call(formData, value)) {
        // @ts-expect-error type errors
          formDataToSend.append(value, formData[value]);
        }
      }

      

      const res = await fetch(`${BACKEND_URL}/cars`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formDataToSend,
      });

      if (res.ok) {
        window.location.href = "/dashboard/cars";
      } else {
        throw new Error(`Error: ${res.status} - ${res.statusText}`);
      }
    } catch (error: any) {
      console.error("Error submitting form:", error.message);
    }
  };
    // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGFkbWluIiwiaWQiOjEsInJvbGUiOiJhZG1pbiIsImlhdCI6MTcwMjA0NTA1NywiZXhwIjoxNzAyMDQ4NjU3fQ.bXZz5VUbXuwopCdzFCKaPq5ybrTm-ZhUFDmWFungMVg";
    return (
        <div>
            <Card>
                <Card.Body>
                    <Card.Title>Tambah Car</Card.Title>
                    <form  onSubmit={handleFormSubmit} >
                        <div className="mb-3">
                            <label>Plate</label>
                            <input type="text" name='plate' className="form-control"  onChange={handleInputChange} />
                        </div>
                        <div className="mb-3">
                            <label>manufacture</label>
                            <input type="text" name='manufacture' className="form-control"  onChange={handleInputChange} />
                        </div>
                        <div className="mb-3">
                            <label>Image</label>
                            <input type="file" name='image' className="form-control"  onChange={handleInputChange} />
                        </div>
                        <div className="mb-3">
                            <label>Model</label>
                            <input type="text" name='model' className="form-control"  onChange={handleInputChange} />
                        </div>
                        <div className="mb-3">
                            <label>Type</label>
                            <input type="text" name='type' className="form-control"  onChange={handleInputChange}/>
                        </div>
                        <div className="mb-3">
                            <label>description</label>
                            <textarea name='description' style={{ height: "100px" }} className="form-control"  onChange={handleInputChange}/>
                        </div>
                        <div className="mb-3">
                            <label>Transmision</label>
                            <select name='transmission' className="form-control"   onChange={handleInputChange}>
                                <option value="Automatic" > Automatic </option>
                                <option value="Manual" > Manual </option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label>Capacity</label>
                            <input type="number" name='capacity' className="form-control"  onChange={handleInputChange}/>
                        </div>
                        <div className="mb-3">
                            <label>Rent Per Day</label>
                            <input type="number" name='rentPerDay' className="form-control"  onChange={handleInputChange}/>
                        </div>
                        <div className="mb-3">
                            <label>Available At</label>
                            <input
                                type="date"
                                name="availableAt"
                                className="form-control"   onChange={handleInputChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label>Available</label>
                            <select name='transmission' className="form-control"  onChange={handleInputChange}  >
                                <option value="True" > Avalaible </option>
                                <option value="False" > NotAvalaible </option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label>Year</label>
                            <input type="number" name='year' className="form-control"  onChange={handleInputChange} />
                        </div>
                        <div className="mb-3">
                            <label>Options</label>
                            <textarea name='options' style={{ height: "100px" }} className="form-control"  onChange={handleInputChange}/>
                        </div>
                        <div className="mb-3">
                            <label>Specs</label>
                            <textarea name='specs' style={{ height: "100px" }} className="form-control"  onChange={handleInputChange}/>
                        </div>

                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </Card.Body>
            </Card>
        </div>
    );
}
export default AddCar;