import React, { Fragment } from "react";
import  "../css/index.css";
import data from "../menu/menu.json";
import ResumenPedido from "./ResumenPedido";

const Bebestibles = () => {

  const [agregar, setAgregar] = React.useState([]);
  const boleta = (e) => {
    console.log("Entro a la funcion")
    const valor = e.target.value;
    const precioPedido = parseInt(valor);
    console.log(precioPedido)
    //setPrecio(precioTotal + precioPedido);
    const nombrePedido = e.target.name;
    //  setPedido(nombrePedido);
    console.log(nombrePedido);
    agregar.push([`${nombrePedido} $${precioPedido}`]);
    setAgregar([...agregar]);
    console.log(agregar);
  };

  let bebestibles = data.Bebestibles;
  console.log(bebestibles);
  return (
    <Fragment>
      <h1>Bebestibles</h1>
      <div className="contenedorGeneral">
        <div className="desayuno">
          <div className="contenedorIzquierdo">
            {bebestibles.map((element, i) => {
              console.log(element.name);
              return (
                <div className="comida">
                  <p>
                    <img src={element.img} alt="" />
                  </p>
                  <p key={i} >{element.name} ${element.precio}</p>
                  <button onClick={boleta} value={element.precio} name={element.name} className="btn btn-dark"> Agregar</button>
                </div>
              );
            })}
          </div>
          <div className="contenedorDerecho">
            <h1><ResumenPedido nombre={agregar} /></h1>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Bebestibles;