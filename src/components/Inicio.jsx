import React, { Fragment } from 'react'
import { BrowserRouter as Router, Link } from "react-router-dom";
import logo from "../img/logo.png"
import "../css/inicio.css";

const Inicio = () => {
    return (
        <Fragment>            
            <div className="contenedor">
            <div className="contenedorLogo">
            <img src={logo} className="logoPrincipal" alt=""/>
            </div>
            <Link to="/menu" className="btn btn-dark">Entrar</Link>
            </div>
        </Fragment>
    )
}

export default Inicio;