import React, { Fragment } from "react";
import styles from "../css/index.module.css";
import data from "../menu/menu.json";


const Desayuno = () => {

  const boleta = (e) => {

    const precio = e.target.value;
    const precioPedido = parseInt(precio);
    console.log(precioPedido);
    console.log(e.target.name);

  };

  let desayunos = data.Desayunos;
  console.log(desayunos);
  return (
    <Fragment>
      <div className={styles.containerLeft}>
        {desayunos.map((element, i) => {
          console.log(element.name);
          return (
            <div>
              <p key={i}>{element.name} </p>
              <p>
                <img src={element.img} />
              </p>
              <p>{element.precio}</p>
              <button onClick={boleta} value={element.precio} name={element.name}> Agregar</button>
            </div>

          );
        })}
      </div>
    </Fragment>
  );
};

export default Desayuno;