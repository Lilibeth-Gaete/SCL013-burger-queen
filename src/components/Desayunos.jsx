import React, { Fragment } from "react";
import "../css/index.css";
import data from "../menu/menu.json";
import ResumenPedido from "./ResumenPedido";
import { db } from "../firebase"
//import shortid from 'shortid';


const Desayuno = () => {
  const [precioTotal, setPrecioTotal] = React.useState([]);
  const [agregar, setAgregar] = React.useState([]);
  let [suma] = React.useState();

  const boleta = (e) => {
    console.log("Entro a la funcion")
    //valor de cada producto
    const valor = e.target.value;
    const precioPedido = parseInt(valor);

    //suma de precios
    precioTotal.push(precioPedido)
    setPrecioTotal([...precioTotal])

    //nombre del pedido
    const nombrePedido = e.target.name;

    //acumulacion de pedido
    agregar.push(`${nombrePedido} $${precioPedido}`);
    setAgregar([...agregar]);
    console.log("holi", agregar);

  };

  const agregarFirebase = async (e) => {
    e.preventDefault()
    try {
      const nuevoPedido = {
        pedido: agregar

      }
      const data = await db.collection("pedidos").add(nuevoPedido);
    } catch (error) {
      console.log(error)
    }
    console.log(agregar)


  }

  suma = precioTotal.reduce((acc, el) => acc + el, 0);

  let desayunos = data.Desayunos;
  return (
    <Fragment>
      <h1>Desayunos</h1>
      <div className="contenedorGeneral">
        <div className="desayuno">
          <div className="contenedorIzquierdo">
            {desayunos.map((element, i) => {
              //console.log(element.name);
              return (
                <div className="comida">
                  <p>
                    <img src={element.img} alt="" />
                  </p>
                  <p key={i}>{element.name} ${element.precio} </p>
                  <button onClick={boleta} value={element.precio} name={element.name} className="btn btn-dark"
                  > Agregar</button>

                </div>

              );

            })

            }
          </div>
          <div className="contenedorDerecho">
            <h3>Resumen Pedido</h3>
            {
              agregar.map((element, i) => {
                return (
                  <p key={i} >
                    <ResumenPedido nombre={element} />
                  </p>
                )
              })
            }
            <h1>Total= ${suma}</h1>
            <button className="btn btn-dark" type="submit" onClick={agregarFirebase} >
              Enviar
            </button>
          </div>
        </div>
      </div>

    </Fragment>
  );
};

export default Desayuno;