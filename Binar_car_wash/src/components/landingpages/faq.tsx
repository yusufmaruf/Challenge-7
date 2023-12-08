function Asked() {
    return (
        <section id="faq-section">
            <div className="container-md d-flex flex-column flex-lg-row faq-container justify-content-between">
                <div className="header">
                    <h2>Frequently Asked Question</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
                {/* accordion */}
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Apa saja syarat yang dibutuhkan?
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                Quisquam, assumenda magni rem error nemo ipsum quos perspiciatis
                                cumque obcaecati eos cupiditate? Quo, officiis! Accusamus
                                maiores in tempora corrupti doloribus fugiat.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Berapa hari minimal sewa mobil lepas kunci?
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro
                                consequatur provident pariatur a et qui ratione quia, ea quo
                                dolorem. Iusto repellendus hic quia amet dolorum, odio aut dolor
                                tenetur.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Berapa hari sebelumnya sabaiknya booking sewa mobil?
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam
                                neque dicta veritatis dolore nobis corrupti error odio quasi
                                deserunt, cupiditate blanditiis ducimus repudiandae nemo
                                expedita eaque veniam nesciunt illo sit?
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingFour">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                Apakah Ada biaya antar-jemput?
                            </button>
                        </h2>
                        <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam
                                neque dicta veritatis dolore nobis corrupti error odio quasi
                                deserunt, cupiditate blanditiis ducimus repudiandae nemo
                                expedita eaque veniam nesciunt illo sit?
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingFive">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                Bagaimana jika terjadi kecelakaan
                            </button>
                        </h2>
                        <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam
                                neque dicta veritatis dolore nobis corrupti error odio quasi
                                deserunt, cupiditate blanditiis ducimus repudiandae nemo
                                expedita eaque veniam nesciunt illo sit?
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}
export default Asked;