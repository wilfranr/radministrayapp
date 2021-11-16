import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer"
import anuncio from "../images/anuncio.jpg"
import anuncio2 from "../images/anuncio2.jpg"


function Clasificados() {
    return (
        <div>
            <Header></Header>
            <div class="clasificados">
                <br />
                <h2>CLASIFICADOS</h2>
                <a href="/NuevoClasificado">
                    <button class="btn btn-primary" type="button">Nuevo</button>
                </a><br /><br />
                <div class="cards">
                    <div class="card" style={{ width: "18rem" }}>
                        <img src={anuncio} class="card-img-top" alt="" />
                        <div class="card-body bg-light">
                            <h5 class="card-title">SE ARRIENDA</h5>
                            <p class="card-text">
                                APARTAMENTO AMOBLADO Apartamenton con Buenos Acabados Cerca de
                                Centros Comerciales...
                            </p>
                            <a href="https://www.fincaraiz.com.co/proyecto-de-vivienda/moka/pance/cali/6486882"
                                class="btn btn-primary">Ver anuncio
                            </a>
                        </div>
                    </div>
                    <div class="card" style={{ width: "18rem" }}>
                        <img src={anuncio2} class="card-img-top" alt="" />
                        <div class="card-body bg-light">
                            <h5 class="card-title">SE VENDE</h5>
                            <p class="card-text">
                                Exclusivo diseño con aprovechamiento total de luz y una magnifica
                                vista desde la terraza solárium, a las montañas orientales...
                            </p>
                            <a href="#!" class="btn btn-primary">Ver anuncio
                            </a>
                        </div>
                    </div>
                    <div class="card" style={{ width: "18rem" }}>
                        <img src={anuncio} class="card-img-top" alt="" />
                        <div class="card-body bg-light">
                            <h5 class="card-title">SE ARRIENDA</h5>
                            <p class="card-text">
                                APARTAMENTO AMOBLADO Apartamenton con Buenos Acabados Cerca de
                                Centros Comerciales...
                            </p>
                            <a href="#!" class="btn btn-primary">Ver anuncio
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}
export default Clasificados