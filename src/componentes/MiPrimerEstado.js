import React, { useState } from "react";

const MiPrimerEstado = () => {
  // varible que guarda el estado, nombre de la función que lo cambia/nuestro setState
  const [nombre, setNombre] = useState("Ismael Silván");

  const cambiarNombre = (nombreFijo) => {
    setNombre(nombreFijo);
  };

  return (
    <div>
      <h3>MiPrimerEstado</h3>

      <p className="label">
        <strong>{nombre}</strong>
      </p>
      <div>
        <button onClick={(e) => cambiarNombre("Flanagan Estepa")}>
          Cambiar nombre por Flanagan
        </button>
        <input 
          type="text"
          onChange={(e) => cambiarNombre(e.target.value)}
          placeholder="Cambiar nombre"
        />
      </div>
    </div>
  );
};

export default MiPrimerEstado;
