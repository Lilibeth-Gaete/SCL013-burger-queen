import React, { Fragment } from 'react'
import Estados from './Estados';
import { db } from "../firebase";

const Orden = () => {

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
            {
                tareas.map(item => (
                    <li key={item.id} className="listaOrden">
                        <span >{item.pedido}</span>

                    </li>
                ))
            }
        </Fragment>
    )
}

export default Orden;