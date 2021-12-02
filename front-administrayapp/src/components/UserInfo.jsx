import React from 'react'
import Cookies from 'universal-cookie'
// import user from "../images/user.svg"
import authHelper from '../helpers/auth.helper'
// import { Fragment } from 'react'
// import { useNavigate } from 'react-router-dom'

export default function UserInfo() {
    const cookies = new Cookies()
    return (
        <div className="btn-group dropstart">
            <div>
                <ul className="navbar-nav">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="/" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        {cookies.get('nameRol')}: {cookies.get('name')}
                        </a>
                        <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                            <li><a className="dropdown-item" href="/contacto">Administrar</a></li>
                            <li><a className="dropdown-item" href="/" onClick={authHelper.deleteToken}>Cerrar sesión</a></li>
                        </ul>
                    </li>
                </ul>
            </div>


        </div>
    )
}
