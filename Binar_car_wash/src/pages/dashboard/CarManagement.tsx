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
import { httpFetch } from "../../utils/http";
import { useLocalStorage } from "../../hooks/useLocalStorage";


// const URL_BACKEND = import.meta.env['VITE_BACKEND_URL']


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
    const [token] = useLocalStorage('token', {});


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
                const coba : any = await httpFetch(`cars/${selectedCar.id}`, false, {}, {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`,
                    },
                })
                if (coba.message === "Car soft deleted successfully") {
                  // Car deleted successfully, update the state
                  getCars();
                  setShowModal(false);
                } else {
                  throw new Error(`Error: ${coba.status} - ${coba.statusText}`);
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

    const filterCars = async (capacity: number) => {
        try {
            const coba : any = await httpFetch('filtered-cars', false, {
                capacity: capacity
            }, {});
            const json = await coba;
            setCars(json);         
        } catch (error: any) {
            console.error(`Error fetching ${capacity} cars:`, error.message);
        }
    };


  

    async function getCars() {
        try {
            const res :any = await httpFetch('cars', false, {}, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    // "Authorization": `Bearer ${token}`
                }
                
            })
            console.log(token);
            const json = await res;
            setCars(json);
        } catch (error:any) {
            console.error("Error fetching cars:", error.message);
        };
    };


    useEffect(() => {
        if ( (!token || Object.keys(token).length === 0)) {
            navigate('/login');
        }
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
                    <Button className="md-3 " style={{marginLeft:"10px"}} onClick={() => filterCars(0)}>All</Button>
                    <Button className="md-3 " style={{marginLeft:"10px"}} onClick={() => filterCars(2)}>Small</Button>
                    <Button className="md-3 " style={{marginLeft:"10px"}}onClick={() => filterCars(4)}>Medium</Button>
                    <Button className="md-3 " style={{marginLeft:"10px"}} onClick={() => filterCars(6)}>Large</Button>
                </Col>

                <Row>
                    {cars.map((car) => (
                        <Col style={{ marginTop: "20px" }} md="4">
                            <Card key={car.id}>
                                <Card.Img variant="top" src={car.image} width={300} height={300} />
                                <Card.Body>
                                    <Card.Title>{car.plate}</Card.Title>
                                    <Card.Text>
                                        Kapasitas :{car.capacity}
                                        <br />
                                        {car.description}
                                    </Card.Text>
                                    <Button variant="primary" onClick={() => handleEditClick(car.id)} style={{ color: "black", borderColor: "black", backgroundColor: "yellow" }}>Edit</Button>
                                    <Button variant="primary" onClick={() => handleDeleteClick(car)} style={{ color: "black", borderColor: "black", backgroundColor: "red", marginLeft: "10px" }}>Hapus</Button>
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