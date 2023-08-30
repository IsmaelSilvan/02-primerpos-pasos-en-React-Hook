import React, { useEffect, useState } from "react";

const PruebasComponent = () => {
  const [usuario, setUsuario] = useState("Ismael Silván");
  const [fecha, setFecha] = useState(new Date().toLocaleString());

  const modUsuario = (e) => {
    setUsuario(e.target.value);
  };

  const changeFecha = () => {
    setFecha(new Date().toLocaleString());
  };

  // Efecto/función que se realiza un cambio en cualquier estado, despúes puedo añadir ",[]" para indicar
  //   que solo quiero que se realice el efecto al cargar el componente
  // Puedo indicar dentro de los corchetes cuando cambia la variable indicada
  useEffect(() => {
    console.log("Has hecho un cambio en un estado");
  });
  useEffect(() => {
    console.log("Has cargado el componente");
  },[]);
  useEffect(() => {
    console.log("Has hecho un cambio en usuario");
  },[usuario]);

  return (
    <div>
      <h1> El efecto - Hook useEffect</h1>
      <div className="comprobacion-caja">
        <p>
          {usuario} - {fecha}
        </p>
      </div>
      <div>
        <input
          type="text"
          onChange={(e) => modUsuario(e)}
          placeholder="Cambia el nombre"
        />
      </div>
      <div>
        <button onClick={changeFecha}>Cambiar fecha</button>
      </div>
    </div>
  );
};

export default PruebasComponent;
