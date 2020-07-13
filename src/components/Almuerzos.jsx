import React, { Fragment } from "react";
import "../css/index.css";
import data from "../menu/menu.json";
import ResumenPedido from "./ResumenPedido";
import { db } from "../firebase"
//import Bebestibles from "./Bebestibles";


const Almuerzos = (props) => {
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
    agregar.push(
      {
        "nombrePedido": nombrePedido,
        "precio": precioPedido
      }
    );
    setAgregar([...agregar]);
    console.log(agregar);


  };
  const agregarFirebase = async (e) => {
    console.log("ingreso agregar almuerzo firebase")
    e.preventDefault()
    try {
      const nuevoPedido = {
        mesero: props.nombreMesero,
        cliente: props.nombreCliente,
        pedido: agregar,
        total: suma

      }
      const data = await db.collection("pedidos").add(nuevoPedido);
    } catch (error) {
      console.log(error)
    }
    console.log(agregar)


  }

  suma = precioTotal.reduce((acc, el) => acc + el, 0);
  const eliminar = (element) => {

    console.log("element", element)
    const index = agregar.indexOf(element)
    console.log("index", index)

    //se eliminar el nombre y precio del arreglo(boleta)
    const algo = agregar.splice(index, 1)
    console.log(algo)

    console.log("splice del precio", algo[0]["precio"]);
    const numero = algo[0]["precio"];
    console.log("precioo a eliminar", numero);

    //se actualiza la informacion de agregar
    setAgregar([...agregar])

    //se eliminar el precio del arreglo precioTotal
    precioTotal.splice(index, 1)

    //console.log("eliminando", eliminar); y debajo de agregar p. } 

    console.log("total actualizado!! ", precioTotal)
    console.log(suma)
  }

  let almuerzos = data.Almuerzos;
  return (
    <Fragment>
      <div className="contenedorGeneral">
        <div className="desayuno">
          <div className="contenedorIzquierdo">
            {almuerzos.map((element, i) => {
              // console.log(element.name);
              return (
                <div className="comida">
                  <p>
                    <img src={element.img} alt="" />
                  </p>
                  <p key={i}>{element.name} ${element.precio} </p>
                  <button onClick={boleta} value={element.precio} name={element.name} className="btn btn-dark"> Agregar</button>
                </div>
              );
            })}
          </div>
          <div className="contenedorDerecho">
            <h3>Resumen Pedido</h3>
            {
              agregar.map((element, i) => {
                return (
                  <p key={i} >
                    <ResumenPedido nombre={element} />
                    <button onClick={eliminar} nombre={agregar} value={i} name={agregar.precio} className="btn btn-danger">X</button>
                  </p>
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

export default Almuerzos;