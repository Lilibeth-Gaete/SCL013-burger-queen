import React, { Fragment } from 'react'

const ResumenPedido = (props) => {

    return (

        < Fragment >
                <li>{props.nombre.nombrePedido} $ {props.nombre.precio}</li>
        </Fragment >


    )
}

export default ResumenPedido;
