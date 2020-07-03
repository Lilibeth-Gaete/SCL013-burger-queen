import React, { Fragment } from "react";
import styles from "../css/index.module.css";
import data from "../menu/menu.json";


const Almuerzos = () => {

  const boleta = (e) => {

    const precio = e.target.value;
    const precioPedido = parseInt(precio);
    console.log(precioPedido);
    console.log(e.target.name);

  };

  let almuerzos = data.Almuerzos;
  console.log(almuerzos);
  return (
    <Fragment>
      <h1>Almuerzos</h1>
      <div className={styles.containerLeft}>
        {almuerzos.map((element, i) => {
          console.log(element.name);
          return (
            <div className={styles.food}>
              <p>
                <img src={element.img} />
              </p>
              <p key={i}>{element.name} ${element.precio} </p>
              <button onClick={boleta} value={element.precio} name={element.name} className="btn btn-dark"> Agregar</button>
            </div>
          );
        })}
      </div>
    </Fragment>
  );
};

export default Almuerzos;