import React, { Fragment } from "react";
import styles from "../css/index.module.css";
//import data from "../menu/menu.json";

import Registro from "./Registro";
import Desayunos from "./Desayunos";
import Almuerzos from "./Almuerzos";
import Bebestibles from "./Bebestibles";
//import ReactDOM from 'react-dom'

const Menu = () => {

  return (
    <Fragment>
      <Registro />
      <div className={styles.generalContainer}>
        <div className={styles.breakfast}>
          <div className={styles.DailyMenu}>
            <Desayunos />
            <Almuerzos />
            <Bebestibles />
          </div>
          <div className={styles.containerRight}>
            <h3>Resumen Pedido</h3>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Menu;
