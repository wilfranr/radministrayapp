import React from "react";
import logo from "../images/logo.png"
import "bootstrap/dist/css/bootstrap.min.css"

class Header extends React.Component {
    render() {
        return (
            <section id="header" class="container-fluid">
                <nav class="navbar navbar-expand-lg navbar-light">
                    <div class="container-fluid">
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <a class="navbar-brand me-4" href="/">
                                <img src={logo} alt="logo" width="120" />
                            </a>
                            <ul class="nav nav-tabs me-4">
                                <li classe="nav-item">
                                    <a class="nav-link text-light" aria-current="page" href="/">Inicio</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-light" aria-current="page" href="/Clasificados"
                                    >Clasificados</a
                                    >
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-light" aria-current="page" href="/Comunicados"
                                    >Comunicados</a
                                    >
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-light" aria-current="page" href="/Emprendimientos"
                                    >Emprendimientos</a
                                    >
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-light" aria-current="page" href="/EstadoCuenta"
                                    >Estado de cuenta</a
                                    >
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-light" aria-current="page" href="/Contacto"
                                    >Contacto</a
                                    >
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