import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer"

function Contacto() {
    return (
        <section id="contacto">
            <Header></Header>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-8 col-lg-6 pb-5">
                        <form action="#" method="post">
                            <div className="card border-light rounded-5">
                                <div className="card-header p-0">
                                    <div className="bg-custom text-light text-center py-2">
                                        <h3><i className="fa fa-envelope"></i>Contáctanos</h3>
                                        <p className="m-0">
                                            Tienes algo que contarnos? Con gusto te ayudaremos
                                        </p>
                                    </div>
                                </div>
                                <div className="card-body p-3">
                                    {/* <!--Body--> */}
                                    <div className="form-group">
                                        <div className="input-group mb-2">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="25" fill="currentColor" className="bi bi-person-workspace" viewBox="0 0 16 16">
                                                        <path d="M4 16s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H4Zm4-5.95a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                                                        <path d="M2 1a2 2 0 0 0-2 2v9.5A1.5 1.5 0 0 0 1.5 14h.653a5.373 5.373 0 0 1 1.066-2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v9h-2.219c.554.654.89 1.373 1.066 2h.653a1.5 1.5 0 0 0 1.5-1.5V3a2 2 0 0 0-2-2H2Z" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="nombre"
                                                name="nombre"
                                                placeholder="Nombre y Apellido"
                                                required
                                                style={{ color: "white" }}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="input-group mb-2">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="25" fill="currentColor" className="bi bi-envelope-fill" viewBox="0 0 16 16">
                                                        <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="email"
                                                name="email"
                                                placeholder="ejemplo@gmail.com"
                                                required
                                                style={{ color: "white" }}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="input-group mb-2">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="25" fill="currentColor" className="bi bi-building" viewBox="0 0 16 16">
                                                        <path fill-rule="evenodd" d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022zM6 8.694 1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15z" />
                                                        <path d="M2 11h1v1H2v-1zm2 0h1v1H4v-1zm-2 2h1v1H2v-1zm2 0h1v1H4v-1zm4-4h1v1H8V9zm2 0h1v1h-1V9zm-2 2h1v1H8v-1zm2 0h1v1h-1v-1zm2-2h1v1h-1V9zm0 2h1v1h-1v-1zM8 7h1v1H8V7zm2 0h1v1h-1V7zm2 0h1v1h-1V7zM8 5h1v1H8V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm0-2h1v1h-1V3z" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <select
                                                className="form-select text-secondary bg-dark"
                                                aria-label="Default select example"
                                            >
                                                <option selected>Seleccione la torre</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="input-group mb-2">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="25" fill="currentColor" className="bi bi-house-fill" viewBox="0 0 16 16">
                                                        <path fill-rule="evenodd" d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z" />
                                                        <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <input
                                                type="number"
                                                className="form-control"
                                                id="apto"
                                                name="apto"
                                                placeholder="Apartamento"
                                                style={{ color: "white" }}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="input-group mb-2">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="25" fill="currentColor" className="bi bi-chat-dots-fill" viewBox="0 0 16 16">
                                                        <path d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <textarea
                                                className="form-control"
                                                placeholder="Envianos tu Mensaje"
                                                required
                                                style={{ color: "white" }}
                                            ></textarea>
                                        </div>
                                    </div>

                                    <div className="text-center">
                                        <input
                                            type="submit"
                                            value="Enviar"
                                            className="btn btn-custom rounded-3 py-2"
                                        />
                                    </div>
                                </div>
                            </div>
                        </form>
                        {/* <!--Form with header--> */}
                    </div>
                    <div className="col-12 col-md-8 col-lg-6 pb-5">
                        <div className="card-body p-3">
                            <div className="card border-light rounded-5">
                                <div className="card-header p-0">
                                    <div className="bg-custom text-light text-center py-2">
                                        <h3>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                                            </svg><slot></slot> Directorio
                                            telefónico
                                        </h3>
                                        <p>
                                            Administración:
                                            <a href="#!" className="text-decoration-none text-info"
                                            >3001234568</a
                                            >
                                        </p>
                                        <p>
                                            Recepción:
                                            <a href="#!" className="text-decoration-none text-info"
                                            >3001234568</a
                                            >
                                        </p>
                                        <p>
                                            Seguridad:
                                            <a href="#!" className="text-decoration-none text-info"
                                            >3001234568</a
                                            >
                                        </p>
                                        <p>
                                            Emergencias:
                                            <a href="#!" className="text-decoration-none text-info"
                                            >3001234568</a
                                            >
                                        </p>
                                        <p>
                                            Email:
                                            <a href="#!" className="text-decoration-none text-info"
                                            >ejemplo@ejemplo.com</a
                                            >
                                        </p>
                                        <p>
                                            Dirección:
                                            <a href="#!" className="text-decoration-none text-info"
                                            >Av. Siempre viva 123</a
                                            >
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </section>

    )
}
export default Contacto