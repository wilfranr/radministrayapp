import React from "react";
import { Link } from "react-router-dom";
import LogoClasificados from "../images/Clasificados.png";
import LogoComunicados from "../images/Comunicados.png";
import LogoContacto from "../images/Contacto.png";
import LogoEstadoCuenta from "../images/EstadoCuenta.png";
import LogoEmprendimientos from "../images/store.png";
import LogoAcerca from "../images/Acerca.png";
import Clasificados from "../views/Clasificados.jsx";
import Comunicados from "../views/Comunicados.jsx";
import Contacto from "../views/Contacto.jsx";
import EstadoCuenta from "../views/EstadoCuenta.jsx";
import Emprendimientos from "../views/Emprendimientos.jsx";
import Acerca from "../views/Acerca.jsx";
import "../styles/style.css"

function Panel(props) {
    return (
        <section id="panel">
            <div className="container">
                <div className="row">
                    <Link className="col mb-5" to="/clasificados" style={{color: 'white'}}>
                        <img src={LogoClasificados} alt="clasificados" width="140" height="140" component={Clasificados}/>
                    </Link>
                    <Link className="col mb-5" to="/comunicados" style={{color: 'white'}}>
                        <img src={LogoComunicados} alt="comunicados" width="140" height="140" component={Comunicados} />
                    </Link>
                    <Link className="col mb-5" to="/contacto" style={{color: 'white'}}>
                        <img src={LogoContacto} alt="contacto" width="140" height="140" component={Contacto} />
                    </Link>
                </div>
                <div className="row">
                    <Link className="col mb-5" to="/estadocuenta" style={{color: 'white'}}>
                        <img src={LogoEstadoCuenta} alt="estado de cuenta" width="140" height="140" component={EstadoCuenta} />
                    </Link>
                    <Link className="col mb-5" to="/emprendimientos" style={{color: 'white'}}>
                        <img src={LogoEmprendimientos} alt="emprendimientos" width="140" height="140" component={Emprendimientos} />
                    </Link>
                    <Link className="col mb-5" to="/acerca" style={{color: 'white'}}>
                        <img src={LogoAcerca} alt="acerca" width="140" height="140" component={Acerca} />
                    </Link>
                </div>
            </div>
        </section>
    )
}
export default Panel