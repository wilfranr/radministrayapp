import React from "react";
import logo from "../images/logo.png"
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

class Header extends React.Component {
    render() {
        return (
            <section id="header" class="container-fluid">
                <nav class="navbar navbar-expand-lg navbar-light">
                    <div class="container-fluid">
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <Link to="/" style={{color: 'white'}}>
                                <img src={logo} alt="logo" width="120" />
                            </Link>
                            <ul class="nav nav-tabs me-4">
                                <li classe="nav-item">
                                    <Link to="/" style={{color: 'white'}} class="nav-link text-light" aria-current="page">Inicio</Link>
                                </li>
                                <li class="nav-item">
                                    <Link to="/Clasificados" style={{color: 'white'}} class="nav-link text-light" aria-current="page">Clasificados</Link>
                                </li>
                                <li class="nav-item">
                                    <Link to="/Comunicados" style={{color: 'white'}} class="nav-link text-light" aria-current="page">Comunicados</Link>
                                </li>
                                <li class="nav-item">
                                    <Link to="/Emprendimientos" style={{color: 'white'}} class="nav-link text-light" aria-current="page">Emprendimientos</Link>
                                </li>
                                <li class="nav-item">
                                    <Link to="/EstadoCuenta" style={{color: 'white'}} class="nav-link text-light" aria-current="page">Estado de cuenta</Link>
                                </li>
                                <li class="nav-item">
                                    <Link to="/Contacto" style={{color: 'white'}} class="nav-link text-light" aria-current="page">Contacto</Link>
                                </li>
                            </ul>
                            <form class="d-flex">
                                <input class="form-control me-3" style={{ color: "white" }} type="search" aria-label="Search" />
                                <button class="btn btn-primary bg-dark"  style={{ color: "white" }} type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </section>
        )
    }
}
export default Header