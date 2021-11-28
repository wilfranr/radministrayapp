import React, { useRef, useState}  from "react";
import Header from "../components/Header";
import Footer from "../components/Footer"
import axios from 'axios'

function NuevoClasificado() {
    
    const email = useRef()
    const nombre = useRef()
    const descripcion = useRef()
    const contacto = useRef()
    const url = useRef()
    const image = useRef()

    const [selectedFile, setSelectedFile] = useState();

    const changeHandler = (event) => {
        console.log(event.target.files[0])
		setSelectedFile(event.target.files[0]);
		//setIsSelected(true);
	};

    const newClassified = async () => {
        let form = new FormData()
        form.append('email', email.current.value)
        form.append('nombre', nombre.current.value)
        form.append('descripcion', descripcion.current.value)
        form.append('contacto', contacto.current.value)
        form.append('url', url.current.value)
        //console.log(selectedFile);
        form.append('image', selectedFile);
        await axios.post(process.env.REACT_APP_API_URL+'classified/', form)
        window.location.href = '/clasificados';
    }

    return (
        <div>

            

            <Header></Header>
            <div className="container mb-5">
                <br />
                <h2>CLASIFICADOS</h2>
                <br /><br /><br />
                <h3 className="text-white text-center">Nuevo Clasificado</h3>

                <input
                    className="form-control form-control-lg"
                    type="text"
                    placeholder="Email"
                    aria-label=".form-control-lg example"
                    style={{ color: "white" }}
                    ref={email}
                /><br />
                <input
                    className="form-control form-control-lg"
                    type="text"
                    placeholder="Titulo"
                    aria-label=".form-control-lg example"
                    style={{ color: "white" }}
                    ref={nombre}
                /><br />
                <input
                    className="form-control"
                    type="text"
                    placeholder="Descripción"
                    aria-label="default input example"
                    style={{ color: "white" }}
                    ref={descripcion}
                /><br />
                <input
                    className="form-control form-control-sm"
                    type="text"
                    placeholder="Contacto"
                    aria-label=".form-control-sm example"
                    style={{ color: "white" }}
                    ref={contacto}
                /><br />
                <input
                    className="form-control form-control-sm"
                    type="text"
                    placeholder="Url"
                    aria-label=".form-control-sm example"
                    style={{ color: "white" }}
                    ref={url}
                /><br />

                <input type="file" accept="image/gif,image/jpeg,image/jpg,image/png" style={{ color: "white" }} onChange={changeHandler}  class="form-control" id="customFile"  ref={image}/>
                <br />
                <br />
                <button class="btn-success btn-lg" type="submit" onClick={newClassified} >Agregar</button>
                <button class="btn-warning btn-lg" type="submit" onClick={() => {window.location.href = '/clasificados'}} >Cancelar</button>
                                

            </div>
            <Footer></Footer>
        </div>
    )
}
export default NuevoClasificado