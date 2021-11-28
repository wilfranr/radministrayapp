import React from "react";
import logo from "../images/logo.png"
import "../styles/style.css"
import Panel from "../components/Panel";
import Footer from "../components/Footer";
import authHelper from '../helpers/auth.helper'
import BotonLogin from "../components/BotonLogin";
import UserInfo from "../components/UserInfo";
// import { useNavigate } from 'react-router-dom'


function Home() {
    // const navigate = useNavigate()
    return (
        
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid bg-primary">
                        <a className="navbar-brand" href="/">
                            <img src={logo} alt="logo" width="120" />
                        </a>
                    {!authHelper.getToken() ?
                        <BotonLogin />
                        :
                        <UserInfo></UserInfo>
                        
                    }
                    </div>
                </nav>
                
                
                <Panel></Panel>
                <Footer></Footer>
                
            </div>
    )
}
export default Home