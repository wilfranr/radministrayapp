import React from "react";
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
            <div class="grid">
                <a href="/clasificados">
                    <img src={LogoClasificados} alt="clasificados" width="140" height="140" element={Clasificados}/>
                </a>
                <a href="/comunicados">
                    <img src={LogoComunicados} alt="comunicados" width="140" height="140" component={Comunicados} />
                </a>
                <a href="/contacto">
                    <img src={LogoContacto} alt="contacto" width="140" height="140" component={Contacto} />
                </a>
                <a href="/estadocuenta">
                    <img src={LogoEstadoCuenta} alt="estado de cuenta" width="140" height="140" component={EstadoCuenta} />
                </a>
                <a href="/emprendimientos">
                    <img src={LogoEmprendimientos} alt="emprendimientos" width="140" height="140" component={Emprendimientos} />
                </a>
                <a href="/acerca">
                    <img src={LogoAcerca} alt="acerca" width="140" height="140" component={Acerca} />
                </a>
            </div>
        </section>
    )
}
export default Panel