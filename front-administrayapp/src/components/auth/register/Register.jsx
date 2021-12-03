import React, { Fragment, useRef } from "react";
import Logo from "../../assets/img/logo.png"
import axios from 'axios'
import authHelper from '../../../helpers/auth.helper'
import { useNavigate } from 'react-router-dom'
import Footer from '../../Footer'


export default function Register() {
  const navigate = useNavigate()
  const rol = useRef()
  const name = useRef()
  const email = useRef()
  const pass = useRef()
  const iden = useRef()
  const bloque = useRef()
  const apto = useRef()
  const tel = useRef()
  const cel = useRef()

  const signup = async () => {
    let form = new URLSearchParams()
    form.append('rol', rol.current.value)
    form.append('name', name.current.value)
    form.append('email', email.current.value)
    form.append('password', pass.current.value)
    form.append('iden', iden.current.value)
    form.append('bloque', bloque.current.value)
    form.append('apto', apto.current.value)
    form.append('tel', tel.current.value)
    form.append('cel', cel.current.value)
    const data = await axios.post(process.env.REACT_APP_API_URL+'auth/register', form, {
      header: { 'Accept': 'application/json' }
    })
    console.log(data)
  

    alert('Usuario creado')
    navigate('/')


  }
  return (
    <Fragment>
      <div className="container">
        <section className="ftco-section">
          <div className="container">
            <div className="row justify-content-center"></div>
            <div className="row justify-content-center">
              <div className="col-md-6 col-lg-4">
                <div className="login-wrap py-5">
                  <a href="/">
                    <div className="img d-flex align-items-center justify-content-center">
                      <img src={Logo} alt="" width="70%" />
                    </div>
                  </a>
                  <p className="text-center">Registro</p>
                  <form action="" className="login-form">
                    <div className="form-group">

                      <select ref={rol} className="form-select" aria-label="Default select example">
                        <option selected disabled>Seleccione un Rol</option>
                        <option value="1">Administrador</option>
                        <option value="2">Seguridad</option>
                        <option value="3">Contratista</option>
                        <option value="4">Propietario</option>
                        <option value="5">Residente</option>
                      </select>
                      <input ref={name}
                        type="text"
                        className="form-control mt-2"
                        placeholder="Nombres y Apellidos"
                        required
                      />
                      <input
                        type="text" ref={bloque}
                        className="form-control mt-2"
                        placeholder="Bloque"
                        
                      />
                      <input
                        type="text" ref={apto}
                        className="form-control mt-2"
                        placeholder="Apartamento"
                        
                      />
                      <input ref={iden}
                        type="number"
                        className="form-control mt-2"
                        placeholder="Identificación"
                        required
                      />
                      <input ref={tel}
                        type="number"
                        className="form-control mt-2"
                        placeholder="Teléfono fijo"
                      />
                      <input ref={cel}
                        type="number"
                        className="form-control mt-2"
                        placeholder="Celular"
                        required
                      />
                      <input ref={email}
                        type="email"
                        className="form-control mt-2"
                        placeholder="E-mail"
                        required
                      />
                      <input ref={pass}
                        type="password"
                        className="form-control mt-2"
                        placeholder="password"
                        required
                      />
                    </div>


                    <div className="form-group mt-2">
                      <button onClick={signup}
                        type="button"
                        className="btn form-control btn-primary rounded submit px-3"
                      >
                        Registrar
                      </button>
                    </div>
                  </form>

                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </Fragment>
  )
}