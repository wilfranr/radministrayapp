import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer"

function NuevoComunicado() {
    return (
        <div>
            <Header></Header>
            <div class="container mb-5">
                <br />
                <h2>COMUNICADOS</h2>
                <br /><br /><br />
                <h1 class="text-white text-center">Nuevo Comunicado</h1>
                <input
                    class="form-control form-control-lg"
                    type="text"
                    placeholder="Titulo"
                    aria-label=".form-control-lg example"
                    style={{ color: "azure" }}
                /><br />
                <textarea
                    class="form-control"
                    placeholder="Descripción"
                    id="FormControlTextarea1"
                    rows="5"
                    style={{ color: "azure" }}
                ></textarea
                ><br /><br />
                <input
                    type="text"
                    id="fecha"
                    name="fecha"
                    placeholder="Fecha"
                /><br /><br />
                <input
                    type="file"
                    class="form-control"
                    id="inputGroupFile04"
                    aria-describedby="inputGroupFileAddon04"
                    aria-label="Upload"
                    style={{ color: "azure" }}
                /><br />
                <router-link
                    to="/"
                    class="btn btn-success btn-lg btn-block"
                    type="button"
                    id="inputGroupFileAddon04"
                    style={{ color: "rgb(255, 255, 255)" }}
                >Upload</router-link
                >
            </div>
            <Footer></Footer>
        </div>
    )
}
export default NuevoComunicado