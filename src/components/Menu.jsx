import React, { Fragment } from "react";
import "../css/index.css";
import Registro from "./Registro";
import Item from "./Item";
import { Link } from "react-router-dom";

const Menu = () => {

  return (

    <Fragment>
      <div className="btn-group">
        <Link to="/menu" className="btn btn-dark">Menu</Link>
        <Link to="/Cocina" className="btn btn-dark">Cocina</Link>
        <Link to="/EstadoComandas" className="btn btn-dark">Estado comandas</Link>
      </div>
      <Registro />
       <Item />
    </Fragment>


  );
};

export default Menu;
