import React, { Fragment } from 'react'
import { db } from "../firebase";
import { Link } from "react-router-dom";
import '../css/cocina.css';

const Cocina = () => {
  const [tareas, setTareas] = React.useState([])
  React.useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const data = await db.collection('pedidos').orderBy("fecha", "asc").get()
        const arrayData = data.docs.map(doc => ({ id: doc.id, ...doc.data() }))
        let filtrarDatos = arrayData.filter(arrayData => arrayData.estado === "Listo")
        setTareas(filtrarDatos)
      } catch (error) {
        console.log(error)
      }
    }
    obtenerDatos()
  }, [])
  return (
    <Fragment>
      <div className="btn-group">
        <Link to="/menu" className="btn btn-dark">Menu</Link>
        <Link to="/Cocina" className="btn btn-dark">Cocina</Link>
        <Link to="/EstadoComandas" className="btn btn-dark">Estado comandas</Link>
      </div>
      <div className="contenedorCocina">
        <h3>Para Entregar</h3>
        {
          tareas.map(item => (
            <div className="contenedorPrincipal">
              <div className="contenedorLista">
                <p>Hora entrada: {item.hora}</p>
                <p>Hora salida:{item.horaListo}</p>
                <p>Mesero: {item.mesero} </p>
                <p>Cliente: {item.cliente}</p>
                <p>Mesa: {item.mesa}</p>
                <span  >
                  <h5>Pedido</h5>
                  {item.pedido.map(elemento => (
                    <li key={item.id}> {elemento.nombrePedido} ${elemento.precio}  </li>
                  ))}</span>
                <p>Total : $ {item.total}</p>
                <button className="btn btn-primary btn-sm">
                  Entregar</button>
              </div>
            </div>
          ))
        }
      </div>
    </Fragment>
  )
}
export default Cocina;