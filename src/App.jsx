import React from "react";
//import styles from "./css/index.module.css";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
//import { db } from "./firebase";
import Menu from "./components/Menu";
import Orden from "./components/Orden";
import Inicio from "./components/Inicio";

function App() {
  /* const [tareas, setTareas] = React.useState([])
 
   React.useEffect(() => {
 
     const obtenerDatos = async () => {
 
       try {
         const data = await db.collection('pedidos').get()
         const arrayData = data.docs.map(doc => ({ id: doc.id, ...doc.data() }))
         console.log(arrayData)
         setTareas(arrayData)
       } catch (error) {
         console.log(error)
       }
     }
     obtenerDatos()
 
   }, [])*/


  return (
    <div>
      <Router >
        <div className="container mt-5">
          <Switch>
            < Route exact path="/">
              <Inicio />
            </Route>
            <Route path="/menu">
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
