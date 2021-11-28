import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer"
import anuncio from "../images/anuncio.jpg"
import anuncio2 from "../images/anuncio2.jpg"
import authHelper from '../helpers/auth.helper'


function Clasificados() {
    return (
        <div>
            <Header></Header>
            <div className="clasificados">
                <br />
                <h2>CLASIFICADOS</h2>
                {authHelper.getToken() ?
                    <a href="/NuevoClasificado"><button className="btn btn-primary" type="button">Nuevo</button></a>
                    :
                    <p></p>
                }


                <div className="cards mt-3">
                    <div className="card" style={{ width: "18rem" }}>
                        <img src={anuncio} className="card-img-top" alt="" />
                        <div className="card-body bg-light">
                            <h5 className="card-title">SE ARRIENDA</h5>
                            <p className="card-text">
                                APARTAMENTO AMOBLADO Apartamenton con Buenos Acabados Cerca de
                                Centros Comerciales...
                            </p>
                            <a href="https://www.fincaraiz.com.co/proyecto-de-vivienda/moka/pance/cali/6486882"
                                className="btn btn-primary">Ver anuncio
                            </a>
                        </div>
                    </div>
                    <div className="card" style={{ width: "18rem" }}>
                        <img src={anuncio2} className="card-img-top" alt="" />
                        <div className="card-body bg-light">
                            <h5 className="card-title">SE VENDE</h5>
                            <p className="card-text">
                                Exclusivo diseño con aprovechamiento total de luz y una magnifica
                                vista desde la terraza solárium, a las montañas orientales...
                            </p>
                            <a href="#!" className="btn btn-primary">Ver anuncio
                            </a>
                        </div>
                    </div>
                    <div className="card" style={{ width: "18rem" }}>
                        <img src={anuncio} className="card-img-top" alt="" />
                        <div className="card-body bg-light">
                            <h5 className="card-title">SE ARRIENDA</h5>
                            <p className="card-text">
                                APARTAMENTO AMOBLADO Apartamenton con Buenos Acabados Cerca de
                                Centros Comerciales...
                            </p>
                            <a href="#!" className="btn btn-primary">Ver anuncio
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