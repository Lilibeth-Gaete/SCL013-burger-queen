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
                let filtrarDatos = arrayData.filter(arrayData => arrayData.estado === "Pendiente")
                setTareas(filtrarDatos)

            } catch (error) {
                console.log(error)
            }
        }
        obtenerDatos()

    }, [])
    const eliminarEstado = async (id) => {

        try {
            await db.collection('pedidos').doc(id).update({
                estado: "Listo",
                horaListo: new Date().toLocaleTimeString()
            })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Fragment>
            <div className="btn-group">
                <Link to="/menu" className="btn btn-dark">Menu</Link>
                <Link to="/Cocina" className="btn btn-dark">Cocina</Link>
                <Link to="/EstadoComandas" className="btn btn-dark">Estado comandas</Link>
            </div>
            <div className="contenedorCocina">
                <h3>Resumen Pedido</h3>
                {
                    tareas.map(item => (
                        <li className="contenedorLista" key={item.id}>
                            <p>Hora de ingreso : {item.hora} </p>
                            <p>Mesero: {item.mesero} </p>
                            <p>Cliente: {item.cliente}</p>
                            <p>Mesa: {item.mesa}</p>
                            <span  >
                                <h5>Pedido</h5>
                                {item.pedido.map(elemento => (
                                    <li> {elemento.nombrePedido} </li>
                                ))}</span>
                            <p>Total : $ {item.total}</p>
                            <button className="btn btn-success btn-sm" onClick={() => eliminarEstado(item.id)} value={item.id}>Listo</button>
                        </li>
                    ))

                }
            </div>
        </Fragment>
    )
}

export default Cocina;