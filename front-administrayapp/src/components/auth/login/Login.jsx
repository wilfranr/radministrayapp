import React, { useRef } from "react";
import axios from 'axios'
import Logo from "../../assets/img/logo.png"
import Register from "../register/Register"
import authHelper from "../../../helpers/auth.helper"
import { useNavigate, Link } from "react-router-dom";
import User from '../../../models/user'
import Cookies from 'universal-cookie';

const cookies = new Cookies()

export default function Login() {
    let navigate = useNavigate()
    const email = useRef()
    const pass = useRef()

    const signIn = async () => {
        let form = new URLSearchParams()
        form.append('email', email.current.value)
        form.append('password', pass.current.value)
        console.log(process.env.REACT_APP_API_URL)
        const data = await axios.post(process.env.REACT_APP_API_URL+'auth/login',form, {
            header: {'Accept': 'application/json'}
        })
        await authHelper.setToken(data.data.token)
        console.log(data)
        const userData = data.data.user
        const user = new User(userData._id, userData.name, userData.email, userData.rol)
        cookies.set('name', userData.name, {path: '/'})
        cookies.set('rol', userData.rol, {path: '/'})
        console.log(user)
        navigate('/')

    }


    return (
        <div className="container">
            <section className="ftco-section">
                <div className="container">
                    <div className="row justify-content-center mt-5">

                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-6 col-lg-4">
                            <div className="login-wrap py-5">

                                    <Link to="/">
                                <div className="img d-flex align-items-center justify-content-center">
                                        <img src={Logo} alt="" width="70%" />
                                </div>
                                    </Link>


                                <form action="" className="login-form mt-2">
                                    <div className="form-group">
                                        <div className="icon d-flex align-items-center justify-content-center"><span className="fa fa-user"></span></div>
                                        <input type="text" id="email" ref={email} className="form-control bg-secondary" placeholder="Email" required />
                                    </div>
                                    <div className="form-group">
                                        <div className="icon d-flex align-items-center justify-content-center"><span className="fa fa-lock"></span></div>
                                        <input type="password" id="pass"
                                            className="form-control mt-3 bg-secondary" ref={pass} placeholder="Password" required />
                                    </div>
                                    <div className="form-group d-md-flex">
                                        <div className="w-100 text-md-right">
                                            <a href="/#">Recuperar contraseña</a>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <input className="bt btn-primary mt-2"
                                            type="button"
                                            value="Ingresar" onClick={signIn}
                                        />

                                    </div>
                                </form>
                                <div className="w-100 text-center mt-4 text">
                                    <p className="mb-0">No tienes cuenta?</p>

                                    <a href="/register" component={Register}>Registrar</a>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        
    )
}