import React from 'react'
import './topbar.css'
import { Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap';
import logo from '../assets/img/logo.png'

export default function TopBar() {
    return (
        <div >
            <Navbar className="Navbar" expand="lg" variant="dark">
                <a className="navbar-brand" href="#home">

                </a>
                <Container>
                    <Navbar.Brand href="#home"><img src={logo} alt="..." height="60" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Inicio</Nav.Link>
                            <NavDropdown title="Clasificados" id="nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Nuevo</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Ver</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#home">Comunicados</Nav.Link>
                            <Nav.Link href="#home">Emprendimientos</Nav.Link>
                            <Nav.Link href="#home">Reportes</Nav.Link>
                            <Nav.Link href="#home">Contacto</Nav.Link>
                            <Nav.Link href="#home">Acerca De</Nav.Link>

                        </Nav>
                        <Button variant="outline-dark">Login</Button>{' '}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
