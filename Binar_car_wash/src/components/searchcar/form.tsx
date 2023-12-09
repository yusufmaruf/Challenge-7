import {
    Card,
    Row,
    Col,    
} from "react-bootstrap";
import { useEffect, useState } from "react";
type Car = {
    id: number,
    model: string;
    image: string;
    plate: string;
    description: string;
    capacity: string;
    rentPerDay: number
}

function FormSearchCar() {
    const [cars, setCars] = useState<Car[]>([]);
    // const [selectedCar, setSelectedCar] = useState<Car | null>(null);
const URL_BACKEND = import.meta.env['VITE_BACKEND_URL']


    
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
    
    const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const driver = formData.get("driver") as string;
        const date = formData.get("date") as string;
        const jemput = formData.get("jemput") as string;
        const capacity = formData.get("capacity") as string;

        try {
            const res = await fetch(`${URL_BACKEND}/filtered-cars?driver=${driver}&date=${date}&jemput=${jemput}&capacity=${capacity}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (!res.ok) {
                throw new Error(`Error: ${res.status} - ${res.statusText}`);
            }

            const json = await res.json();
            setCars(json);
        } catch (error: any) {
            console.error("Error filtering cars:", error.message);
        }
    };




    useEffect(() => {
        getCars()
    }, []);
    return (
        <div className="container">
            <div className="row">
                <div className="col-10 offset-1 search-panel">
                    <form  onSubmit={handleFormSubmit}>
                        <div className="row">
                            <div className="col-lg">
                                <div className="form-group">
                                    <label htmlFor="driver">Tipe Driver</label>
                                    <select name="driver" id="driver" className="form-select">
                                        <option value="" disabled selected hidden>Pilih Tipe Driver</option>
                                        <option value="dengan-supir">Dengan Supir</option>
                                        <option value="tanpa-supir">Tanpa Supir</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-lg">
                                <div className="form-group">
                                    <label htmlFor="tanggal">Tanggal</label>
                                    <input type="date" name="date" id="tanggal" className="form-control" />
                                </div>
                            </div>
                            <div className="col-lg">
                                <div className="form-group">
                                    <label htmlFor="jemput">Waktu Jemput/Ambil</label>
                                    <input type="time" name="jemput" id="jemput" className="form-control" />
                                </div>
                            </div>
                            <div className="col-lg">
                                <div className="form-group">
                                    <label htmlFor="jmlPenumpang">Jumlah Penumpang</label>
                                    <input type="number" name="capacity" id="jmlPenumpang" className="form-control" placeholder="Tentukan kapasitas" />
                                </div>
                            </div>
                            <div className="col-lg">
                                <div className="form-group">
                                    <button type="submit" className="btn btn-success" id="btn-search">Cari Mobil</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

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
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            
        </div>
    );


}
export default FormSearchCar;