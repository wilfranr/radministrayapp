import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer"
import comunicado from "../images/tuboRoto.jpeg"

function Comunicados() {
    return (
        <div>
            <Header></Header>
            <div class="container mb-5">
                <br />
                <h2>COMUNICADOS</h2>
                <a href="/NuevoComunicado">
                    <button class="btn btn-primary" type="button">
                        Nuevo
                    </button>
                </a><br /><br />
                <div class="row mb-5">
                    <div class="col-3">
                        <img src={comunicado} alt="" class="img-fuid" />
                        <p class="lead text-center text-light">04-septiembre-2021</p>
                    </div>
                    <div class="col-12 col-md-9">
                        <a href="#!">
                            <h3 class="text-light text-decoration-none">Corte de agua.</h3>
                        </a>
                        <p class="text-light">
                            Se informa a los residentes que el dia 15 de septiembre se realizará
                            un corte de agua de 8:00am a 6:00pm para la reparacion de la
                            tubería.
                        </p>
                        <p class="text-light">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae sed
                            voluptatibus voluptate aspernatur fugit est qui nesciunt obcaecati
                            molestiae perferendis?
                        </p>
                        <a href="#!" class="btn btn-light btn-sm">Ver más...</a>
                    </div>
                </div>
                <div class="row mb-5">
                    <div class="col-3">
                        <img src={comunicado} alt="" class="img-fuid" />
                        <p class="lead text-center text-light">04-septiembre-2021</p>
                    </div>
                    <div class="col-12 col-md-9">
                        <a href="#!">
                            <h3 class="text-light text-decoration-none">Corte de agua.</h3>
                        </a>
                        <p class="text-light">
                            Se informa a los residentes que el dia 15 de septiembre se realizará
                            un corte de agua de 8:00am a 6:00pm para la reparacion de la
                            tubería.
                        </p>
                        <p class="text-light">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae sed
                            voluptatibus voluptate aspernatur fugit est qui nesciunt obcaecati
                            molestiae perferendis?
                        </p>
                        <a href="#!" class="btn btn-light btn-sm">Ver más...</a>
                    </div>
                </div>
                <div class="row mb-5">
                    <div class="col-3">
                        <img src={comunicado} alt="" class="img-fuid" />
                        <p class="lead text-center text-light">04-septiembre-2021</p>
                    </div>
                    <div class="col-12 col-md-9">
                        <a href="#!">
                            <h3 class="text-light text-decoration-none">Corte de agua.</h3>
                        </a>
                        <p class="text-light">
                            Se informa a los residentes que el dia 15 de septiembre se realizará
                            un corte de agua de 8:00am a 6:00pm para la reparacion de la
                            tubería.
                        </p>
                        <p class="text-light">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae sed
                            voluptatibus voluptate aspernatur fugit est qui nesciunt obcaecati
                            molestiae perferendis?
                        </p>
                        <a href="#!" class="btn btn-light btn-sm">Ver más...</a>
                    </div>
                </div>
                <div
                    class="btn-toolbar d-flex justify-content-center mb-3"
                    role="toolbar"
                    aria-label="Toolbar with button groups"
                >
                    <div class="btn-group me-2" role="group" aria-label="First group">
                        <button type="button" class="btn btn-light">Inicio</button>
                        <button type="button" class="btn btn-light">1</button>
                        <button type="button" class="btn btn-light">2</button>
                        <button type="button" class="btn btn-light">3</button>
                        <button type="button" class="btn btn-light">4</button>
                        <button type="button" class="btn btn-light">Fin</button>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}
export default Comunicados