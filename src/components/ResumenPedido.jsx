import React from 'react'

const ResumenPedido = (props) => {
    
    return (
        <div>
            <h3>Resumen Pedido</h3>
            <table>
            <tr>
            <td>{props.nombre } </td>
            </tr>
            </table>
        </div>
    )
}

export default ResumenPedido;
