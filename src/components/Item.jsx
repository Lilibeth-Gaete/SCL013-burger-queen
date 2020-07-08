import React, { Fragment } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Desayunos from "./Desayunos";
<<<<<<< HEAD
import Almuerzos from "./Almuerzos"; 
=======

import Almuerzos from "./Almuerzos";
>>>>>>> 83dbc9a2886c0e554dee8e4bd2f09152d611469d

export const Item = () => {
    return (
        <Fragment>
            <div>
                <Router >
                    <div className="container mt-5">
                        <div className="btn-group">
                            <Link to="/Desayunos" className="btn btn-dark">Desayunos</Link>
                            <Link to="/Almuerzos" className="btn btn-dark">Almuerzos</Link>
                        </div>
                        <Switch>
                            <Route path="/Desayunos">
                                <Desayunos />
                            </Route>
                            <Route path="/Almuerzos">
                                <Almuerzos />
                            </Route>
                        </Switch>
                    </div>
                </Router>
            </div>
            <h1>Elija un item para tomar la orden</h1>        </Fragment>
    )
}
export default Item;
