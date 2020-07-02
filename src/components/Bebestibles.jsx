import React, { Fragment } from "react";
import styles from "../css/index.module.css";
import data from "../menu/menu.json";


const Bebestibles = () => {
  // MOSTRANDO DATA

  let bebestibles = data.Bebestibles;
  console.log(bebestibles);
  return (
    <Fragment>
        <div className={styles.containerLeft}>
          {bebestibles.map((element, i) => {
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
    </Fragment>
  );
};

export default Bebestibles;