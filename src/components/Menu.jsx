import React, { Fragment } from "react";
import styles from "../css/index.module.css";
//import data from "../menu/menu.json";
import Registro from "./Registro";
import Desayunos from "./Desayunos";
import Almuerzos from "./Almuerzos";
import Bebestibles from "./Bebestibles";
import Item from "./Item";
//import ResumenPedido from "./ResumenPedido";
//import ReactDOM from 'react-dom'

const Menu = () => {

  return (

    <Fragment>
      <Registro />
      <div className={styles.generalContainer}>
        <div className={styles.breakfast}>
          <div className={styles.DailyMenu}>
            <Item />
          </div>
        </div>
      </div>
    </Fragment>


  );
};

export default Menu;
