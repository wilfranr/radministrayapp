import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer"

function NuevoEmprendimiento() {
    return (
        <div>
            <Header></Header>
            <div class="container mb-5">
            <br />
                <h2>EMPRENDIMIENTOS</h2>
                <br /><br /><br />
                <h1 class="text-white text-center">Nuevo Emprendimiento</h1>
                <input
                    class="form-control form-control-lg"
                    type="text"
                    placeholder="Nombre del emprendimiento"
                    aria-label=".form-control-lg example"
                    style={{ color: "white" }}
                /><br />
                <input
                    class="form-control"
                    type="text"
                    placeholder="Descripción"
                    aria-label="default input example"
                    style={{ color: "white" }}
                /><br />
                <input
                    class="form-control form-control-sm"
                    type="text"
                    placeholder="Contacto"
                    aria-label=".form-control-sm example"
                    style={{ color: "white" }}
                /><br />
                <input
                    class="form-control form-control-sm"
                    type="text"
                    placeholder="Url"
                    aria-label=".form-control-sm example"
                    style={{ color: "white" }}
                /><br />
                <input type="file" class="form-control" style={{ color: "white" }} id="customFile" /><br />

                <input class="btn btn-success" type="submit" value="Crear" />
            </div>
            <Footer></Footer>
        </div>
    )
}
export default NuevoEmprendimiento