function Footer() {
    return (
    <footer>
        <div className="container-md d-flex flex-column flex-lg-row justify-content-between mt-5 mb-3 footer-container">
            <div className="address footer-child">
                <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
                <p>binarcarrental@gmail.com</p>
                <p>081-233-334-808</p>
            </div>
            <div className="navigation d-flex flex-column footer-child">
                <ul>
                    <li><a href="#our-services"> Our services</a></li>
                    <li><a href="#why-us">Why Us </a></li>
                    <li><a href="#testimonial">Testimonial </a></li>
                    <li><a href="#faq-section">FAQ </a></li>
                </ul>
            </div>
            <div className="sosmed footer-child">
                <p>Connect with us</p>
                <div className="icon-container d-flex">
                    <img sizes="32px" className="sosmed-icon" src="https://i.ibb.co/3TQ1Bgh/icon-facebook.png" alt="facebook-icon" />
                    <img className="sosmed-icon" src="https://i.ibb.co/TqJsYch/icon-instagram.png" alt="instagram-icon" width="32px" />
                    <img className="sosmed-icon" src="https://i.ibb.co/Dfw5cLB/icon-twitter.png" alt="twitter-icon" width="32px" />
                    <img className="sosmed-icon" src="https://i.ibb.co/tY0TB5Z/icon-mail.png" alt="mail-icon" width="32px" />
                    <img className="sosmed-icon" src="https://i.ibb.co/z79LS0p/icon-twitch.png" alt="twictch-icon" width="32px" />
                </div>
            </div>
            <div className="copyright footer-child">
                <p>Copyright Binar 2022</p>
                <a href="#home">
                    <img src="https://i.ibb.co/MkygZR1/bcr-logo.png" alt="logo" />
                </a>
            </div>
        </div>
    </footer>
    )
}

export default Footer;