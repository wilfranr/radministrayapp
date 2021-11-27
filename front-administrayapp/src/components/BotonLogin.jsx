import React from 'react'
import Login from '../components/auth/login/Login'

export default function BotonLogin() {
    return (
        <div>
            <a href="/login">
                <div className="login-btn" type="button" component={Login}>Ingresar</div>
            </a>
        </div>
    )
}
