import React, {Fragment} from 'react'
import { Link } from "react-router-dom";

export const EstadoComandas = () => {
    return (
        <Fragment>
         <div className="btn-group">
        <Link to="/menu" className="btn btn-dark">Menu</Link>
        <Link to="/Cocina" className="btn btn-dark">Cocina</Link>
        <Link to="/EstadoComandas" className="btn btn-dark">Estado comandas</Link>
      </div>
        </Fragment>
    )
}

export default EstadoComandas;