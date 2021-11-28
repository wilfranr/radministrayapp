import Header from "../components/Header";
import Footer from "../components/Footer"
import anuncio from "../images/anuncio.jpg"
import anuncio2 from "../images/anuncio2.jpg"
import authHelper from '../helpers/auth.helper'

import React, {useEffect, useState, useRef} from 'react'
import axios from 'axios'


function Clasificados() {
    
    const [classifieds,setClassifieds]=useState([])

    useEffect(()=>{
        obtenerClasificados()
    },[])

    const obtenerClasificados= async()=>{
            const respuesta= await axios.get(process.env.REACT_APP_API_URL+'classified')
            //console.log(respuesta.data)
            setClassifieds(respuesta.data)
        }

    const eliminarClasificados= async(id)=>{
        //console.log(id)
        await axios.delete(process.env.REACT_APP_API_URL+'classified/'+id)
        obtenerClasificados()
    }

    return (
        
        <div>
            <Header></Header>
            <div className="clasificados">
                <br />
                <h2>CLASIFICADOS</h2>

                <a href="/NuevoClasificado">
                    <button class="btn btn-primary" type="button">Nuevo</button>
                </a><br /><br />
                                          
                <div className="cards">
                    {                        
                        classifieds.map(classified => (
                            <div className="col-md-10 p-2" key={classified._id}>
                                <div className="card">
                                    <div className="card-header d-flex justify-content-between" heig>
                                        <h5>{classified.nombre.substring(0, 10)+"..."}</h5>
                                        <div >
                                            <a href={"/editarclasificado/"+classified._id}>
                                                <button className="btn btn-secondary" type="button">Edit</button>
                                            </a>
                                            
                                            <button className="btn btn-danger" onClick={() => {if(window.confirm('Esta seguro de eliminar el clasificado?')){ eliminarClasificados(classified._id)};}}>Del</button>
                                        </div>
                                        
                                    </div>
                                    <div className="card-body" width="18rem;">
                                        <img src={`${process.env.REACT_APP_API_URL}/${classified.image}`} width="100%" height="200" class="card-img-top" />
                                        <p className="card-text" style={{ color: 'white' }}>{classified.descripcion.substring(0, 100)+"..."}</p>
                                         <a href={classified.url} class="btn btn-primary">Ver anuncio</a>
                                    </div>     
                                </div>
                            </div>
                        ))                        
                    }

                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}
export default Clasificados