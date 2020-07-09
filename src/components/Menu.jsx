import React, { Fragment } from "react";
import  "../css/index.css";
//import data from "../menu/menu.json";
import Registro from "./Registro";
import Item from "./Item";
//import ResumenPedido from "./ResumenPedido";
//import ReactDOM from 'react-dom'

const Menu = () => {

  return (

    <Fragment>
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
