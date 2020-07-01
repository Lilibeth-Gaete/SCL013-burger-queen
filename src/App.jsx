import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route, NavLink } from 'react-router-dom';
import { firebase } from './firebase';
import Menu from './components/Menu'
import Orden from './components/Orden';


function App() {

  React.useEffect(() => {
    const obtenerDatos = async () => {
      var db = firebase.firestore();

      db.collection("pedidos").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          console.log(`${doc.data} => ${doc.data().bebestible}`);

        });
      });
    }

    obtenerDatos()
  }, [])


  return (
    <Router>
      <div>
        <Link to="/menu">
          menu
  </Link>
        <Link to="/orden">
          Orden
  </Link>
      </div>
      <Switch>
        <Route path="/menu" >
          <Menu />

        </Route>

        <Route path="/orden" >
          <Orden />

        </Route>

      </Switch>

    </Router>

    /*<Router>
      <div className="container">
        <h2>Las Cabras, comida chilena</h2>
        <div className="btn-group">
          <NavLink to="/Menu" className="btn btn-dark">
            Menu
                </NavLink>
          <Link to="/Orden" className="btn btn-dark">
            Orden
                </Link>
          <Link to="/Estado" className="btn btn-dark">
            Estado
                </Link>
        </div>
        <hr />
        <Switch>
          <Route path="/Menu" exact>
            Este es el menu
            <Menu />

          </Route>
          <Route path="/Orden">
            Aquí van las ordenes al cocinero
            <Orden />
          </Route>
          <Route path="/Estado">
            Aqui se ven los estados de los pedidos
            <Estados />
          </Route>

        </Switch>
      </div>
    </Router>*/
  )
};

export default App;
