import React from "react";
import Pagos from "../assets/pagos.png";
import Social from "../assets/social.svg";

const Footer = () =>{
    return(
        <footer>
            <div className="footer-wrap">
                <div className="footer-col">
                    <p className="footer-txt">
                        Suscribete y recibe el 
                        <span className="footer-sizeXl">10% de Dcto</span><br></br>
                        en el mes de tu cumpleaños
                    </p>

                    <div className="footer-wrapInput">
                        <input type="text" placeholder="Ingresa tu correo"></input>
                        <button> > </button>
                    </div>

                    <div className="footer-accept">
                        <input type="checkbox"></input>
                        <p>Al suscribirte aceptas 
                            <a>términos y condiciones y políticas de privacidad</a>
                            </p>
                    </div>

                </div>
                <div className="footer-col">
                    <a className="footer-link">Servicio al cliente</a>
                    <a className="footer-link">Nuestras tiendas</a>
                    <a className="footer-link">Superintendencia de Industria y Comercio</a>
                    <a className="footer-link"> <span></span>  Colombia ></a>
                </div>
                <div className="footer-col">
                    <p className="footer-txt">Medios de pago</p>
                    <img src={Pagos}/>
                    <img src={Social}/>
                    <p className="footer-txt">Contáctanos de Lunes a Viernes <br></br> de 8:00am a 4:00pm</p>
                </div>
            </div>
            <div className="footer-sub">
             Colombia Mario Hernández 2020.  Derechos reservados. Desarrollado por Titamedia
            </div>
            <div className="footer-name">MARIO HERNÁNDEZ</div>
        </footer>
    )
}

export default Footer;