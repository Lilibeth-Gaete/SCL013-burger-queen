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
      <h1>Datos</h1>
      <form className="row" onSubmit={enviarDatos}>
        <div className="col-md-3">
          <input
            placeholder="nombre mesero"
            className="form-control"
            type="text"
            name="mesero"
            onChange={handleInputChange}
          ></input>
        </div>
        <div className="col-md-3">
          <input
            placeholder="nombre cliente"
            className="form-control"
            type="text"
            name="cliente"
            onChange={handleInputChange}
          ></input>
        </div>
        <div className="col-md-3">
          <button className="btn btn-primary" type="submit">
            Enviar
          </button>
        </div>
      </form>
      <h1>
        {datos.mesero} - {datos.cliente}
      </h1>
    </Fragment>
  );
};

export default Registro;
