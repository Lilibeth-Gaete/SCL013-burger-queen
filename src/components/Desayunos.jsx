import React, { Fragment } from "react";
import styles from "../css/index.module.css";
import data from "../menu/menu.json";
import ResumenPedido from "./ResumenPedido";
//import shortid from 'shortid';


const Desayuno = () => {
  const [precioTotal, setPrecioTotal] = React.useState([]);
  const [agregar, setAgregar] = React.useState([]);
  let [suma, setSuma] = React.useState();

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
    agregar.push([`${nombrePedido} $${precioPedido}`]);
    setAgregar([...agregar]);
    console.log(agregar);


  };

  suma = precioTotal.reduce((acc, el) => acc + el, 0);

  let desayunos = data.Desayunos;
  return (
    <Fragment>
      <h1>Desayunos</h1>
      <div className={styles.generalContainer}>
        <div className={styles.breakfast}>
          <div className={styles.containerLeft}>
            {desayunos.map((element, i) => {
              //console.log(element.name);
              return (
                <div className={styles.food}>
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
          <div className={styles.containerRight}>
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
            <button className="btn btn-dark" type="submit">
              Enviar
            </button>
          </div>
        </div>
      </div>

    </Fragment>
  );
};

export default Desayuno;