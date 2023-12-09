

import { Button } from 'react-bootstrap';
const HeroSection = () => {
    return (
        <section id="hero-section">
            <div className="container-fluid">
                <div className="row">
                    <div className="hero-desc container-md">
                        <div className="hero-desc--text col-md-6 col-sm-12 col-xs-12">
                            <h1>Sewa &amp; Rental Mobil Terbaik di Kawasan Bandung</h1>
                            <p>
                                Selamat datang di Binar Car Rental. Kami menyediakan mobil
                                kualitas terbaik dengan harga terjangkau. selalu siap melayani
                                kebutuhanmu untuk sewa mobil selama 24 jam.
                            </p>
                            
                            <Button className="btn btn-success" style={{ backgroundColor: "green", color: "white", marginBottom: "10px" }}>
                                Mulai Sewa Mobil
                            </Button>
                            
                        </div>
                    </div>
                    <div className="hero-ills ol-md-6 col-md-6 col-sm-12 col-xs-12 justify-content-end">
                        <img src="https://i.ibb.co/Krg5rVN/img-car.png" alt="Hero-Image" className="img-fluid" />
                    </div>
                </div>
            </div>
        </section>
  
    );
}
export default HeroSection;