import React from "react";
import logo from "../components/assets/img/logo.png"
import Register from "../views/Register"


function Login() {
    return (
        <div className="container">
        <section className="ftco-section">
            <div className="container">
                <div className="row justify-content-center mt-5">
                    
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-4">
                        <div className="login-wrap py-5">
                            <router-link to="/">
                                <div className="img d-flex align-items-center justify-content-center" ><img src={logo} alt="" width="180%"/></div>
                            </router-link>
                            <form action="" className="login-form mt-2">
                          <div className="form-group">
                              <div className="icon d-flex align-items-center justify-content-center"><span className="fa fa-user"></span></div>
                              <input type="text" id="email"className="form-control" placeholder="Email" required/>
                          </div>
                    <div className="form-group">
                        <div className="icon d-flex align-items-center justify-content-center"><span className="fa fa-lock"></span></div>
                      <input type="password" id="pass"
                       className="form-control mt-3" placeholder="Password" required/>
                    </div>
                    <div className="form-group d-md-flex">
                                    <div className="w-100 text-md-right">
                                        <a href="/#">Recuperar contraseña</a>
                                    </div>
                    </div>
                    <div className="form-group">
                        <input
                    className="bt btn-primary mt-2"
                    type="button"
                    value="Ingresar"
                  />
                    </div>
                  </form>
                  <div className="w-100 text-center mt-4 text">
                      <p className="mb-0">No tienes cuenta?</p>
                      <router-link to="Register">
                          <a href="/register" component={Register}>Registrar</a>
                      </router-link>
                  </div>
                </div>
                    </div>
                </div>
            </div>
        </section>
      </div>
    )
}
export default Login