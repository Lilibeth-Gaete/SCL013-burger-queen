import React, { Fragment } from 'react'
import { BrowserRouter as Router, Link } from "react-router-dom";
import logo from "../img/logo.png"


const Inicio = () => {
    return (
        <Fragment>
            <img src={logo} className="logoPrincipal" />
            <Link to="/menu" className="btn btn-dark btn-block" >Entrar</Link>
        </Fragment>
    )
}

export default Inicio;