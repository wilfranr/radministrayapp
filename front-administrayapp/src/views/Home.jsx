import React from "react";
import logo from "../images/logo.png"
import user from "../images/user.svg"
import "../styles/style.css"
import Panel from "../components/Panel";
import Footer from "../components/Footer";
import Login from "../components/auth/login/Login"


function Home() {
    return (
        <section >
            <div id="home">
                <img src={logo} alt="logo" width="120" />
                <div id="userName">Invitado <img src={user} alt="user" width="20" />
                </div>
                <a href="/login">
                    <div className="login-btn" type="button" component={Login}>Ingresar</div>
                </a>
            </div>
            <Panel></Panel>
            <Footer></Footer>
        </section>
    )
}
export default Home