import React from "react";
import Logo from "../../assets/img/logo.png"


function Register() {
    return (
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
              <form action="#" className="login-form mt-2">
                <div className="form-group">
                  
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>Seleccione un Rol</option>
                    <option value="1">Administrador</option>
                    <option value="2">Seguridad</option>
                    <option value="3">Tercero</option>
                    <option value="4">Propietario</option>
                    <option value="5">Residente</option>
                  </select>
                  <input
                    type="text"
                    className="form-control mt-2"
                    placeholder="Nombres y Apellidos"
                    required
                  />
                  <input
                    type="text"
                    className="form-control mt-2"
                    placeholder="Torre"
                    required
                  />
                  <input
                    type="text"
                    className="form-control mt-2"
                    placeholder="Apartamento"
                    required
                  />
                  <input
                    type="number"
                    className="form-control mt-2"
                    placeholder="Identificación"
                    required
                  />
                  <input
                    type="number"
                    className="form-control mt-2"
                    placeholder="Teléfono fijo"
                  />
                  <input
                    type="number"
                    className="form-control mt-2"
                    placeholder="Celular"
                    required
                  />
                  <input
                    type="email"
                    className="form-control mt-2"
                    placeholder="E-mail"
                    required
                  />
                </div>
                

                <div className="form-group mt-2">
                  <button
                    type="submit"
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
    )
}
export default Register