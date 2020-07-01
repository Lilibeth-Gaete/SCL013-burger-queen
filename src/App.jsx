import React from "react";
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
    <Router>
      <div>
        <Link to="/menu">menu</Link>
        <Link to="/orden">Orden</Link>
      </div>
      <Switch>
        <Route path="/menu">
          <Menu />
        </Route>
        <Route path="/orden">
          <Orden />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
