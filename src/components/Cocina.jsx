import React, { Fragment } from 'react'
import Estados from './Estados';
import { db } from "../firebase";
import { Link } from "react-router-dom";

const Cocina = () => {

    const [tareas, setTareas] = React.useState([])

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

    }, [])

    return (
        <Fragment>
            <div className="btn-group">
        <Link to="/menu" className="btn btn-dark">Menu</Link>
        <Link to="/Cocina" className="btn btn-dark">Cocina</Link>
        <Link to="/EstadoComandas" className="btn btn-dark">Estado comandas</Link>
      </div>
            {
                tareas.map(item => (
                    <li key={item.id} className="listaCocina">
                        <span >{item.pedido}</span>

                    </li>
                ))
            }
        </Fragment>
    )
}

export default Cocina;