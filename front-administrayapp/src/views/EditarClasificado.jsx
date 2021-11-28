import React, { useState, useEffect}  from "react";
import Header from "../components/Header";
import Footer from "../components/Footer"
import axios from 'axios'
import { useParams } from "react-router";

function EditarClasificado() {
    
    let { id } = useParams();
    //console.log(process.env.REACT_APP_API_URL+'classified/'+id)

    const [email,setEmail]=useState('')
    const [nombre,setNombre]=useState('')
    const [descripcion,setDescripcion]=useState('')
    const [contacto,setContacto]=useState('')
    const [url,setUrl]=useState('')
    const [image,setImage]=useState('')

    const [selectedFile, setSelectedFile] = useState();
    
    const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
	};

    const editClassified = async () => {
        let form = new FormData()
        form.append('email', email)
        form.append('nombre', nombre)
        form.append('descripcion', descripcion)
        form.append('contacto', contacto)
        form.append('url', url)
        form.append('image', selectedFile);
        //console.log(selectedFile)
        await axios.put(process.env.REACT_APP_API_URL+`classified/${id}`, form)        
        window.location.href = '/clasificados';
    }
    
    useEffect(() => {
        obtenerClasificado()
    }, [])

    const obtenerClasificado= async()=>{
        const respuesta= await axios.get(process.env.REACT_APP_API_URL+`classified/${id}`)
        //console.log(respuesta.data);
        setEmail(respuesta.data.email)
        setNombre(respuesta.data.nombre)
        setDescripcion(respuesta.data.descripcion)
        setContacto(respuesta.data.contacto)
        setUrl(respuesta.data.url)
        setImage(respuesta.data.image)
    }
    
    return (
        <div>
            <Header></Header>
            <div class="container mb-5">
                <br />
                <h3 class="text-white text-center">Editar Clasificado</h3>
                <br />
                <input
                    class="form-control form-control-lg"
                    type="text"
                    placeholder="Email"
                    aria-label=".form-control-lg example"
                    style={{ color: "white" }}
                    onChange={e => setEmail(e.target.value)} value={email}
                /><br />
                <input
                    class="form-control form-control-lg"
                    type="text"
                    placeholder="Titulo"
                    aria-label=".form-control-lg example"
                    style={{ color: "white" }}
                    onChange={e => setNombre(e.target.value)} value={nombre}
                /><br />
                <input
                    class="form-control"
                    type="text"
                    placeholder="Descripción"
                    aria-label="default input example"
                    style={{ color: "white" }}
                    onChange={e => setDescripcion(e.target.value)} value={descripcion}
                /><br />
                <input
                    class="form-control form-control-sm"
                    type="text"
                    placeholder="Contacto"
                    aria-label=".form-control-sm example"
                    style={{ color: "white" }}
                    onChange={e => setContacto(e.target.value)} value={contacto}
                /><br />
                <input
                    class="form-control form-control-sm"
                    type="text"
                    placeholder="Url"
                    aria-label=".form-control-sm example"
                    style={{ color: "white" }}
                    onChange={e => setUrl(e.target.value)} value={url}
                /><br />
                <input type="file" accept="image/gif,image/jpeg,image/jpg,image/png" style={{ color: "white" }} class="form-control" id="customFile" onChange={changeHandler} setImage={changeHandler} 
                />
                <br />
                <img src={`${process.env.REACT_APP_API_URL}/${image}`} width="100px" className="img-fluid"/> 
                <br />
                <br />
                <button class="btn-success btn-lg" type="submit" onClick={editClassified} >Editar</button>
                <button class="btn-warning btn-lg" type="submit" onClick={() => {window.location.href = '/clasificados'}} >Cancelar</button>
            </div>
                                        
            <Footer></Footer>
            
        </div>
    )
}
export default EditarClasificado