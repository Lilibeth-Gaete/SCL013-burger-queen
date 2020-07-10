import React, { Fragment } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Desayunos from "./Desayunos";

import Almuerzos from "./Almuerzos";

export const Item = () => {
    return (
        <Fragment>
            <div>
                <Router >
                    <div className="container mt-2">
                        <div className="btn-group">
                            <Link to="/Desayunos" className="btn btn-dark">Desayunos</Link>
                            <Link to="/Almuerzos" className="btn btn-dark">Almuerzos y Bebestibles</Link>
                        </div>
                        <Switch>
                            <Route path="/Desayunos" exact>
                                <Desayunos />
                            </Route>
                            <Route path="/Almuerzos" exact>
                                <Almuerzos />
                            </Route>
                        </Switch>
                    </div>
                </Router>
            </div>
    </Fragment>
    )
}
export default Item;
