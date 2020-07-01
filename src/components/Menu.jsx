import React, { Fragment } from "react";
import styles from "../css/index.module.css";
import data from "../menu/menu.json";
import Registro from "./Registro";
//import ReactDOM from 'react-dom'

const Menu = () => {
  // MOSTRANDO DATA

  let desayunos = data.Desayunos;
  console.log(desayunos);
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
                <p>{element.value}</p>
              </div>
            );
          })}
        </div>
        <div className={styles.containerRight}>
          <p>HOOOLAAA</p>
        </div>
      </div>
    </Fragment>
  );
};

export default Menu;
