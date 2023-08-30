import React, { useEffect, useState } from "react";
import { AvisoComponent } from "./AvisoComponent";

const PruebasComponent = () => {
  const [usuario, setUsuario] = useState("Ismael Silván");
  const [fecha, setFecha] = useState(new Date().toLocaleString());
  const [contador /* , setContador */] = useState(0);

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
  // Al cargar el componente
  useEffect(() => {
    console.log("Has cargado el componente");
  }, []);
  // Al cambiar una variable
  useEffect(() => {
    // setContador(contador+1);
    // console.log("Has hecho un cambio en el usuario " + contador + " veces");
    console.log("Has hecho un cambio en el usuario ");
  }, [usuario, fecha]);

  return (
    <div>
      <h1> El efecto - Hook useEffect</h1>
      <div
        className={
          contador <= 10 ? "comprobacion-caja" : "comprobacion-caja opcion-2"
        }
      >
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

      {usuario === "Ismael Silván Vicente" && <AvisoComponent />}
    </div>
  );
};

export default PruebasComponent;
