import React from "react";
import logo from "../images/logo.png"
import "bootstrap/dist/css/bootstrap.min.css"
import authHelper from '../helpers/auth.helper'
import BotonLogin from "../components/BotonLogin";
import UserInfo from "../components/UserInfo";


class Header extends React.Component {
    render() {
        return (
            <section className="">
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">
                            <img src={logo} alt="logo" width="120" />
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="/">Inicio</a>
                                </li>
                                <li className="nav-item active">
                                    <a className="nav-link" href="/clasificados">Clasificados</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/comunicados">Comunicados</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/emprendimientos">Emprendimientos</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/estadocuenta">Estado de cuenta</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/contacto">Contacto</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/acerca">Acerca</a>
                                </li>
                                <form class="d-flex">
                                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                    <button className="btn btn-outline-light" type="submit">Search</button>
                                </form>

                            </ul>
                        </div>
                        {!authHelper.getToken() ?
                        <BotonLogin />
                        :
                        <UserInfo></UserInfo>
                        
                    }
                    
                    </div>
                </nav>
                {/* <nav className="navbar navbar-expand-lg navbar-dark">
                    <div className="container-fluid">
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <a className="navbar-brand" href="/">
                                <img src={logo} alt="logo" width="120" />
                            </a>
                            <ul className="nav nav-tabs me-4">
                                <li classe="nav-item">
                                    <Link to="/" style={{ color: 'white' }} className="nav-link text-light" aria-current="page">Inicio</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/Clasificados" style={{ color: 'white' }} className="nav-link text-light" aria-current="page">Clasificados</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/Comunicados" style={{ color: 'white' }} className="nav-link text-light" aria-current="page">Comunicados</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/Emprendimientos" style={{ color: 'white' }} className="nav-link text-light" aria-current="page">Emprendimientos</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/EstadoCuenta" style={{ color: 'white' }} className="nav-link text-light" aria-current="page">Estado de cuenta</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/Contacto" style={{ color: 'white' }} className="nav-link text-light" aria-current="page">Contacto</Link>
                                </li>
                            </ul>
                            <form className="d-flex">
                                <input className="form-control me-3" style={{ color: "white" }} type="search" aria-label="Search" />
                                <button className="btn btn-primary bg-dark" style={{ color: "white" }} type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                    {!authHelper.getToken() ?
                        <BotonLogin />
                        :
                        <UserInfo></UserInfo>

                    }
                </nav> */}

            </section>
        )
    }
}
export default Header