import  { useEffect, useState , ChangeEvent, FormEvent} from 'react';
import { Card } from 'react-bootstrap';
import {  useParams,  } from 'react-router-dom';
import { useLocalStorage } from '../../hooks/useLocalStorage';
const URL_BACKEND = import.meta.env['VITE_BACKEND_URL']
function EditCar() {
    const [token] = useLocalStorage('token', {});


    type Car = {
        id: number,
        model: string;
        image: string;
        plate: string;
        description: string;
        capacity: string;
        rentPerDay: number;
        manufacture: string;
        transmission: string;
        year: number;
        availableAt: string;
    }

    const { carId } = useParams();
    const [car, setCar] = useState<Car>();


    
    useEffect(() => {
        // Simulasi pemanggilan API atau pengambilan data dari tempat penyimpanan
        const fetchData = async () => {
            try {
                const response = await fetch(`${URL_BACKEND}/cars/${carId}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setCar(data);
            } catch (error:any) {
                console.error('Error fetching data:', error.message);
            }
        };

        fetchData();
    }, [carId]);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setCar((prevCar) => ({
            ...prevCar!,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await fetch(`${URL_BACKEND}/cars/${carId}`, {
                method: 'PATCH', // or 'PATCH' depending on your API
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(car),
            });

            if (!response.ok) {
                throw new Error('Failed to update data');
            } else {
                window.location.href = '/dashboard/cars';
            }

            // Handle success, maybe redirect or show a success message
        } catch (error:any) {
            console.error('Error updating data:', error.message);
            // Handle error, show an error message or perform other actions
        }
    };



    return (
        <>
             <div>
                <Card>
                    <Card.Body>
                        <Card.Title>Edit Cars {car?.model}</Card.Title>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label>Model</label>
                                <input type="text" name='model' value={car?.model} className="form-control" onChange={handleInputChange}  />
                            </div>
                            <div className="mb-3">
                                <label>Plate</label>
                                <input type="text" name='plate' value={car?.plate} className="form-control"  onChange={handleInputChange}  />
                            </div>
                            <div className="mb-3">
                                <label>manufacture</label>
                                <input type="text" name='manufacture' value={car?.manufacture} className="form-control" onChange={handleInputChange}  />
                            </div>
                            <div className="mb-3">
                                <label>description</label>
                                <textarea  name='description' style={{ height: "100px" }} value={car?.description} className="form-control"  onChange={handleInputChange}/>
                            </div>
                            <div className="mb-3">
                                <label>Transmision</label>
                                <select name='transmission' className="form-control" onChange={handleInputChange} >
                                   <option value="Automatic" selected={car?.transmission == "Automatic"}> Automatic </option>
                                   <option value="Manual" selected={car?.transmission == "Manual"}> Manual </option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label>Capacity</label>
                                <input type="number" name='capacity' value={car?.capacity} className="form-control"  onChange={handleInputChange}  />
                            </div>
                            <div className="mb-3">
                                <label>Rent Per Day</label>
                                <input type="number" name='rentPerDay' value={car?.rentPerDay} className="form-control"  onChange={handleInputChange}  />
                            </div>
                            <div className="mb-3">
                                <label>Year</label>
                                <input type="number" name='year' value={car?.year} className="form-control" onChange={handleInputChange}  />
                            </div>
                            <div className="mb-3">
                                <label>Available At</label>
                                
                                 <input
                                    type="date"
                                    name="availableAt"
                                    className="form-control"
                                    value={car?.availableAt.split('T')[0]} 
                                    onChange={handleInputChange}
                                />
                            </div>

                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </Card.Body>
                </Card>
        </div>
        </>
    );
}
export default EditCar;