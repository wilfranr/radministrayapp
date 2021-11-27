import React from "react";
import logo from "../images/logo.png"
import "../styles/style.css"
import Panel from "../components/Panel";
import Footer from "../components/Footer";
import authHelper from '../helpers/auth.helper'
import BotonLogin from "../components/BotonLogin";
import UserInfo from "../components/UserInfo";


function Home() {

    return (
        <section >
            <div id="home">
                <img src={logo} alt="logo" width="120" />
            </div>
            {!authHelper.getToken() ?
                <BotonLogin />
                :
                <UserInfo />

            }

            <Panel></Panel>
            <Footer></Footer>
        </section>
    )
}
export default Home