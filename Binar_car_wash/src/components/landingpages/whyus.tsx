function WhyUs() {
    return (
        <section id="why-us">
            <div className="container">
                <div className="why-us--header">
                    <h2>Why Us?</h2>
                    <p>Mengapa harus pilih Binar Car Rental?</p>
                </div>
                <div className="cards-container d-flex flex-column flex-lg-row align-items-center justify-content-between">
                    {/* cards */}
                    <div className="mycard">
                        <div className="card-body">
                            <img src="https://i.ibb.co/TR7GWtk/icon-complete.png" alt="thumb-up-icon" className="mb-3" />
                            <h5 className="card-title mb-3 text-bold">Mobil Lengkap</h5>
                            <p className="card-text">
                                Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan
                                terawat
                            </p>
                        </div>
                    </div>
                    {/* cards */}
                    <div className="mycard">
                        <div className="card-body">
                            <img src="https://i.ibb.co/LpDVtSH/icon-price.png" alt="price-icon" className="mb-3" />
                            <h5 className="card-title mb-3 text-bold">Harga Murah</h5>
                            <p className="card-text">
                                Harga murah dan bersaing, bisa bandingkan harga kami dengan
                                rental mobil lain
                            </p>
                        </div>
                    </div>
                    {/* cards */}
                    <div className="mycard">
                        <div className="card-body">
                            <img src="https://i.ibb.co/5hcdbpw/icon-24hrs.png" alt="time-icon" className="mb-3" />
                            <h5 className="card-title mb-3 text-bold">Layanan 24 Jam</h5>
                            <p className="card-text">
                                Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga
                                tersedia di akhir minggu
                            </p>
                        </div>
                    </div>
                    {/* cards */}
                    <div className="mycard">
                        <div className="card-body">
                            <img src="https://i.ibb.co/KLYChwX/icon-professional.png" alt="profesional-icon" className="mb-3" />
                            <h5 className="card-title mb-3 text-bold">Sopir Profesional</h5>
                            <p className="card-text">
                                Sopir yang profesional, berpengalaman, jujur, ramah dan selalu
                                tepat waktu
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}
export default WhyUs;