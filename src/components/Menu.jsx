import React, { Fragment } from "react";
import "../css/index.css";
//import data from "../menu/menu.json";
import Registro from "./Registro";
import Item from "./Item";
import { Link } from "react-router-dom";

//import ResumenPedido from "./ResumenPedido";
//import ReactDOM from 'react-dom'

const Menu = () => {

  return (

    <Fragment>
      <div className="btn-group">
        <Link to="/menu" className="btn btn-dark">Menu</Link>
        <Link to="/orden" className="btn btn-dark">Orden</Link>
      </div>
      <Registro />
      <div className="contenedorGeneral">
        <div className="desayuno">
          <div className="menuDiario">
            <Item />
          </div>
        </div>
      </div>
    </Fragment>


  );
};

export default Menu;
