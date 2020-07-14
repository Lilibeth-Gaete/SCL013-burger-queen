import React, { Fragment } from "react";
import "../css/index.css";
import data from "../menu/menu.json";
import ResumenPedido from "./ResumenPedido";
import { db } from "../firebase"
//import shortid from 'shortid';


const Desayuno = (props) => {
  const [precioTotal, setPrecioTotal] = React.useState([]);
  const [agregar, setAgregar] = React.useState([]);
  let [suma] = React.useState();
  const [pendiente] = React.useState("Pendiente")

  const boleta = (e) => {
    //valor de cada producto
    const valor = e.target.value;
    const precioPedido = parseInt(valor);

    //suma de precios
    precioTotal.push(precioPedido)
    setPrecioTotal([...precioTotal])

    //nombre del pedido
    const nombrePedido = e.target.name;

    //acumulacion de pedido
    agregar.push(
      {
        "nombrePedido": nombrePedido,
        "precio": precioPedido
      }
    );
    setAgregar([...agregar]);
    console.log("holi", agregar);

  };

  const agregarFirebase = async (e) => {
    e.preventDefault()
    try {
      const nuevoPedido = {
        mesero: props.nombreMesero,
        cliente: props.nombreCliente,
        pedido: agregar,
        total: suma,
        fecha: Date.now(),
        estado: pendiente


      }
      const data = await db.collection("pedidos").add(nuevoPedido);
    } catch (error) {
      console.log(error)
    }
    console.log(agregar)
    setAgregar([]);
    setPrecioTotal([]);


  }

  suma = precioTotal.reduce((acc, el) => acc + el, 0);

  const eliminar = (e) => {

    const posicion = e.target.value;
    console.log("posicion01", posicion)
    agregar.splice(posicion, 1)
    setAgregar([...agregar])
    console.log("agreganddo", agregar)
    precioTotal.splice(posicion, 1)

  }

  let desayunos = data.Desayunos;
  return (
    <Fragment>
      <div className="contenedorGeneral">
        <div className="desayuno">
          <div className="contenedorIzquierdo">
            {desayunos.map((element, i) => {
              //console.log(element.name);
              return (
                <div key={i} className="comida">
                  <p>
                    <img src={element.img} alt="" />
                  </p>
                  <p key={i}>{element.name} ${element.precio} </p>
                  <button onClick={boleta} value={element.precio} name={element.name} className="btn btn-dark"> Agregar</button>
                </div>

              );

            })

            }
          </div>
          <div className="contenedorDerecho">
            <h3>Resumen Pedido</h3>
            {
              agregar.map((element, i) => {
                console.log("este es mi element", element)
                return (
                  <ul key={element.id} className="pedido" >
                    <button onClick={eliminar} nombre={element} value={i} className="btn btn-dark btn-sm">x</button><ResumenPedido nombre={element} />
                  </ul>
                )
              })
            }
            <h6>Total= ${suma}</h6>
            <div className="btnEnviar">
              <button className="btn btn-dark btn-sm" type="submit" onClick={agregarFirebase} >
                Enviar
            </button>
            </div>
          </div>
        </div>
      </div>

    </Fragment>
  );
};

export default Desayuno;