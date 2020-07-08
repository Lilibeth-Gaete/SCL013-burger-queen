import React from "react";
//import styles from "./css/index.module.css";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import { firebase } from "./firebase";
import Menu from "./components/Menu";
import Orden from "./components/Orden";

function App() {
  React.useEffect(() => {
    const obtenerDatos = async () => {
      var db = firebase.firestore();

      db.collection("pedidos")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            console.log(`${doc.data} => ${doc.data().bebestible}`);
          });
        });
    };

    obtenerDatos();
  }, []);

  return (
    <div>
    <Router >
      <div className="container mt-5">
        <div className="btn-group">
        <Link to="/menu" className="btn btn-dark">Menu</Link>
        <Link to="/orden" className="btn btn-dark">Orden</Link>
        </div>
      <Switch>
        <Route path="/">
          <Menu />
        </Route>
        <Route path="/orden">
          <Orden />
        </Route>
      </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
