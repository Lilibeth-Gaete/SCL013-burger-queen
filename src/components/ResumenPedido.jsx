import React, { Fragment } from 'react'

const ResumenPedido = (props) => {

    return (

        < Fragment >

            <ul className="pedido">
                <li>{props.nombre.nombrePedido} $ {props.nombre.precio}</li>
                <p> </p>
            </ul>
        </Fragment >


    )
}

export default ResumenPedido;
