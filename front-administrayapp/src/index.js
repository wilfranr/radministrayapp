import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./views/Home";
import Clasificados from "./views/Clasificados";
import NuevoClasificado from "./views/NuevoClasificado";
import Comunicados from "./views/Comunicados";
import NuevoComunicado from "./views/NuevoComunicado";
import Contacto from "./views/Contacto";
import Emprendimientos from "./views/Emprendimientos";
import NuevoEmprendimiento from "./views/NuevoEmprendimiento";
import EstadoCuenta from "./views/EstadoCuenta";
import Acerca from "./views/Acerca"
import Login from "./components/auth/login/Login";
import Register from "./components/auth/register/Register";
require ('dotenv').config()


const container = document.getElementById('root');

//ReactDOM.render(que,donde)
ReactDOM.render(
<BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/clasificados" element={<Clasificados/>}/>
        <Route path="/nuevoclasificado" element={<NuevoClasificado/>}/>
        <Route path="/comunicados" element={<Comunicados/>}/>
        <Route path="/nuevocomunicado" element={<NuevoComunicado/>}/>
        <Route path="/contacto" element={<Contacto/>}/>
        <Route path="/emprendimientos" element={<Emprendimientos/>}/>
        <Route path="/nuevoemprendimiento" element={<NuevoEmprendimiento/>}/>
        <Route path="/estadocuenta" element={<EstadoCuenta/>}/>
        <Route path="/acerca" element={<Acerca/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
    </Routes>
</BrowserRouter>,container)
