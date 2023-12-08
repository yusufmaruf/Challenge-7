import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';



import {
    Card,
    Row,
    Col,
    Button,
    Container,
    Modal,    
} from "react-bootstrap";

const URL_BACKEND = "http://localhost:3000"
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGFkbWluIiwiaWQiOjEsInJvbGUiOiJhZG1pbiIsImlhdCI6MTcwMjAyODgwOCwiZXhwIjoxNzAyMDMyNDA4fQ.Cex6K-DsN_73Ul8qLTTWpfrgF2Ply-Nq73SnLe-Q7O8";


type Car = {
    id: number,
    model: string;
    image: string;
    plate: string;
    description: string;
    capacity: string;
    rentPerDay: number
}

function CarManagement() {
    const [cars, setCars] = useState<Car[]>([]);
    const [selectedCar, setSelectedCar] = useState<Car | null>(null);
    const [showModal, setShowModal] = useState(false);


     const navigate = useNavigate();

    const handleEditClick = (carId : any) => {
        navigate(`/dashboard/cars/edit-car/${carId}`);
    };

    const handleDeleteClick = (car: Car) => {
        setSelectedCar(car);
        setShowModal(true);
    };
    const handleConfirmDelete = async () => {
        if (selectedCar) {
            try {
                
                const res = await fetch(`${URL_BACKEND}/cars/${selectedCar.id}`, {
                  method: "DELETE",
                  headers: {
                      "Content-Type": "application/json",
                      "Authorization": `Bearer ${token}`
                  },
                });
                if (res.ok) {
                  // Car deleted successfully, update the state
                  getCars();
                  setShowModal(false);
                } else {
                  throw new Error(`Error: ${res.status} - ${res.statusText}`);
                }

                // For the example, let's assume the car is deleted successfully
                const updatedCars = cars.filter((car) => car.id !== selectedCar.id);
                setCars(updatedCars);
                setShowModal(false);
            } catch (error: any) {
                console.error("Error deleting car:", error.message);
            }
        }
    };

    const handleCancelDelete = () => {
        setSelectedCar(null);
        setShowModal(false);
    };

  

    async function getCars() {
        try {
            const res = await fetch(`${URL_BACKEND}/cars`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    
                }
            });

            if (!res.ok) {
                throw new Error(`Error: ${res.status} - ${res.statusText}`);
            }

            const json = await res.json();
            setCars(json);
        } catch (error:any) {
            console.error("Error fetching cars:", error.message);
        };
    };


    useEffect(() => {
        getCars()
    }, []);

    return (
        <>
            <Container fluid>
            
                <div>
                    <p>Cars |  <span style={{ fontWeight: "bold" }}>List Cars</span></p>
                </div>
                
                <Col className="d-flex justify-content-between align-items-center" style={{ height: "100px" }}>
                    <div><h4 style={{ fontWeight: "bold" }}>List Car</h4></div>
                    <Button onClick={() => navigate("/dashboard/cars/add-car")}>
                        Add
                    </Button>
                </Col>
                <Col className="d-flex">
                    <Button className="md-3 " style={{marginLeft:"10px"}}>All</Button>
                    <Button className="md-3 " style={{marginLeft:"10px"}}>Small</Button>
                    <Button className="md-3 " style={{marginLeft:"10px"}}>Medium</Button>
                    <Button className="md-3 " style={{marginLeft:"10px"}}>Large</Button>
                </Col>

                <Row>
                   {cars.map((car) => (
                       <Col style={{marginTop:"20px"}} md="4">
                           <Card key={car.id}>
                               <Card.Img variant="top" src={car.image} width={300} height={300}/>
                               <Card.Body>
                                   <Card.Title>{car.plate}</Card.Title>
                                   <Card.Text>
                                       {car.description}
                                   </Card.Text>
                                   <Button variant="primary" onClick={() => handleEditClick(car.id)} style={{color:"black", borderColor:"black", backgroundColor:"yellow"}}>Edit</Button>
                                   <Button variant="primary" onClick={() => handleDeleteClick(car)} style={{color:"black", borderColor:"black", backgroundColor:"red", marginLeft:"10px"}}>Hapus</Button>
                               </Card.Body>
                           </Card>
                       </Col>
                   ))}
                </Row>

                

                <Modal show={showModal} onHide={handleCancelDelete}>
                    <Modal.Header closeButton>
                        <Modal.Title>Delete Car</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Are you sure you want to delete the car with plate number: {selectedCar?.plate}?
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCancelDelete}>
                        Cancel
                        </Button>
                        <Button variant="danger" onClick={handleConfirmDelete}>
                        Delete
                        </Button>
                    </Modal.Footer>


                </Modal>

            </Container>
        </>);
}
export default CarManagement;