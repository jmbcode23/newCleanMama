import { Link } from "react-router-dom";
import logo from '../images/logo.png';
import './footer.css';
function Footer() {
    return (
        <footer style={{ backgroundColor: "rgba(244, 244, 244, 0.831)" }}>
            <svg class="footer-wave-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 100" preserveAspectRatio="none">
                <path class="footer-wave-path" d="M851.8,100c125,0,288.3-45,348.2-64V0H0v44c3.7-1,7.3-1.9,11-2.9C80.7,22,151.7,10.8,223.5,6.3C276.7,2.9,330,4,383,9.8 c52.2,5.7,103.3,16.2,153.4,32.8C623.9,71.3,726.8,100,851.8,100z"></path>
            </svg>

            <div className="footer">
                <img src={logo} />
                <div>
                    <h2>NOUS CONTACTER</h2>
                    <p>Téléphone: <a href="tel:+243 81 947 1244">(+243) 81 947 1244</a></p>
                    <p>Email: <a href="mailto:contact@cleanmama.com">contact@cleanmama.com</a></p>
                    <p>Adresse: 3379, Avenue du Plateau, Gombe. RDC</p>
                </div>
                <div>
                    <h2>NOUS LOCALISER</h2>

                </div>
            </div>
            <div className="copyright">
                <p>Copyright © Clean Mama SARL {new Date().getFullYear()} | Tous droits reservés |  Website by <Link to="https://www.instagram.com/devgenius_aid/" target="_blank">DevGenius Aid</Link></p>
            </div>
        </footer >
    )
};

export default Footer;