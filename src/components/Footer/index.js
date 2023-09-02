import { faClock, faEnvelope, faFileCircleCheck, faLocationDot, faPhone, faTruckFast } from "@fortawesome/free-solid-svg-icons";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faFacebookF, faSquareInstagram, faSquareWhatsapp, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="item-footer info">
                <h2>Información útil</h2>
                <ul className="ul-footer">
                    <li className="li-footer"><FontAwesomeIcon icon={faFileCircleCheck}/>Obras sociales</li>
                    <li className="li-footer"><FontAwesomeIcon icon={faTruckFast}/>Envíos</li>
                    <li className="li-footer"><FontAwesomeIcon icon={faFileCircleCheck}/>Pagos</li>
                </ul>
            </div>
            <div className="item-footer redes-sociales">
                <h2>Nuestras Redes</h2>
                <ul className="ul-footer">
                    <li className="li-footer"><FontAwesomeIcon icon={faFacebookF}/>Facebook</li>
                    <li className="li-footer"><FontAwesomeIcon icon={faSquareInstagram}/>Instagram</li>

                </ul>
            </div>
            <div className="item-footer contacto">  
                <h2>Contacto</h2>
                <ul className="ul-footer">
                    <li className="li-footer"><FontAwesomeIcon icon={faSquareWhatsapp}/>Whatsapp</li>
                    <li className="li-footer"><FontAwesomeIcon icon={faPhone}/>Telefono</li>
                    <li className="li-footer"><FontAwesomeIcon icon={faLocationDot}/>Ubicacion</li>
                    <li className="li-footer"><FontAwesomeIcon icon={faEnvelope}/>Email</li>
                    <li className="li-footer"><FontAwesomeIcon icon={faClock}/>Horario</li>  
                </ul>
            </div>
            <div className="item-footer mapa">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d26172.92251272281!2d-57.974537332388756!3d-34.916102159572006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sar!4v1687885511173!5m2!1ses!2sar"></iframe>         
            </div>
        </footer>
    )
}

export default Footer;