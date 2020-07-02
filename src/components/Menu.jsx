import React, { Fragment } from "react";
import styles from "../css/index.module.css";
import data from "../menu/menu.json";
import Registro from "./Registro";
//import ReactDOM from 'react-dom'

const Menu = () => {
  // MOSTRANDO DATA

  let desayunos = data.Desayunos;
  console.log(desayunos);

  const boleta = (e) => {
    console.log(e.target.name);
    const precio = e.target.value;
    const precioPedido = parseInt(precio);
    console.log(parseInt(precio));
    // console.log(e.target.name);
  };

  const hola = "buscando precio";
  return (
    <Fragment>
      <Registro />
      <div className={styles.breakfast}>
        <div className={styles.containerLeft}>
          {desayunos.map((element, i) => {
            console.log(element.name);
            return (
              <div>
                <p key={i}>{element.name} </p>
                <p>
                  <img src={element.img} />
                </p>
                <p>{element.precio}</p>{" "}


                <button
                  className="btn btn-success"
                  value={element.precio}
                  name={element.name}
                  onClick={boleta}

                >
                  Agregar
                </button>

              </div>
            );
          })}
        </div>
        <div className={styles.containerRight}>
          <p></p>
        </div>
      </div>
    </Fragment>
  );
};

export default Menu;
