import React, { Fragment, useState } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Desayunos from "./Desayunos";
import Almuerzos from "./Almuerzos";

export const Item = () => {
    const [datos, setDatos] = useState({
        mesero: "",
        cliente: "",
        mesa: "",
    });
    const handleInputChange = (event) => {
        setDatos({
            ...datos,
            [event.target.name]: event.target.value,
        });
    };
    const enviarDatos = (event) => {
        event.preventDefault();

    };
    return (
        <Fragment>
            <div className="item1">
                <form className="row mt-3" onSubmit={enviarDatos}>
                    <div className="col">
                        <input
                            placeholder="nombre mesero"
                            className="form-control form-control-sm"
                            type="text"
                            name="mesero"
                            onChange={handleInputChange}
                            required
                        ></input>
                    </div>
                    <div className="col">
                        <input
                            placeholder="nombre cliente"
                            className="form-control form-control-sm"
                            type="text"
                            name="cliente"
                            onChange={handleInputChange}
                        ></input>
                    </div>
                    <div className="col">
                        <input
                            placeholder="n° de mesa"
                            className="form-control form-control-sm"
                            name="mesa"
                            type="number"
                            min="0"
                            max="50"
                            onChange={handleInputChange}
                        ></input>
                    </div>
                    <div className="col">
                        <button className="btn btn-dark" type="submit">
                            Registrar
          </button>
                    </div>
                </form>
                <div>
                    <Router >
                        <div className="container mt-2">
                            <div className="btn-group">
                                <Link to="/Desayunos" className="btn btn-dark">Desayunos</Link>
                                <Link to="/Almuerzos" className="btn btn-dark">Almuerzos y Bebestibles</Link>
                            </div>
                            <Switch>
                                <Route path="/Desayunos" exact>
                                    <Desayunos nombreMesero={datos.mesero} nombreCliente={datos.cliente} mesa={datos.mesa} />
                                </Route>
                                <Route path="/Almuerzos" exact>
                                    <Almuerzos nombreMesero={datos.mesero} nombreCliente={datos.cliente} mesa={datos.mesa} />
                                </Route>
                            </Switch>
                        </div>
                    </Router>
                </div>
            </div>
        </Fragment>
    )
}
export default Item;
