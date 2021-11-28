import React from 'react'

export default function BotonLogin() {
    return (
        <div>
            <div className="btn-group dropstart">
                <button className="navbar-toggler dropstart" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Invitado
                            </a>
                            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                                <li><a className="dropdown-item" href="/login">Ingresar</a></li>
                                <li><a className="dropdown-item" href="/register">Registrar</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    )
}
