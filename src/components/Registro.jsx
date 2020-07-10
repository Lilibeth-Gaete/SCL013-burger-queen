import React, { Fragment, useState } from "react";

const Registro = () => {
  //NOMBRE MESERO Y CLIENTE

  const [datos, setDatos] = useState({
    mesero: "",
    cliente: "",
  });
  const handleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };
  const enviarDatos = (event) => {
    event.preventDefault();
    console.log(datos.mesero + "" + datos.cliente);
  };

  return (
    <Fragment>
      <form className="row mt-3" onSubmit={enviarDatos}>
        <div className="col">
          <input
            placeholder="nombre mesero"
            className="form-control form-control-sm"
            type="text"
            name="mesero"
            onChange={handleInputChange}
          ></input>
          <p> Atendido por: {datos.mesero} </p>
        </div>
        <div className="col">
          <input
            placeholder="nombre cliente"
            className="form-control form-control-sm"
            type="text"
            name="cliente"
            onChange={handleInputChange}
          ></input>
          <p> Cliente: {datos.cliente}</p>
        </div>
        <div className="col">
          <button className="btn btn-dark" type="submit">
            Enviar
          </button>
        </div>
      </form>
    </Fragment>
  );
};

export default Registro;
