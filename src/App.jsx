import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Menu from "./components/Menu";
import Cocina from "./components/Cocina";
import Inicio from "./components/Inicio";
import EstadoComandas from "./components/EstadoComandas";

function App() {
  return (
    <div>
      <Router >
        <div className="container mt-4">
          <Switch>
            < Route exact path="/">
              <Inicio />
            </Route>
            <Route path="/menu">
              <Menu />
            </Route>
            <Route path="/Cocina">
              <Cocina />
            </Route>
            <Route path="/EstadoComandas">
              <EstadoComandas />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
