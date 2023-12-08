
function HomeHeader () {
  return (
      <header>
            <nav className="navbar navbar-expand-lg fixed-top">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <img src="https://i.ibb.co/YpR7MsN/logo.png" alt="logo" style={{ border: 0 }} />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasRightLabel" style={{ fontWeight: 700 }}>BCR</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
                        </div>
                        <div className="offcanvas-body justify-content-end">
                            <div className="navbar-nav">
                                <a className="nav-link active" href="#sect2">Our Services</a>
                                <a className="nav-link active" href="#sect3">Why Us</a>
                                <a className="nav-link active" href="#sect4">Testimonial</a>
                                <a className="nav-link active" href="#sect5">FAQ</a>
                                <a className="btn btn-sm btn-success my-2" style={{ backgroundColor: "green", color: "white" }}>Register</a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
  );
};

export default HomeHeader;
