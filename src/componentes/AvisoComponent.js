import React, { useEffect } from "react";// Apendiendo a usar useEffect

export const AvisoComponent = () => {
  useEffect(() => {
    //   Cuando se monta el componente
    alert("El componente AVISOCOMPONENTE esta MONTADO");

    // Cuando se desmonta el componente
    return () => {
      alert("Componente desmontado");
    };
  }, []);

  return (
    <div>
      <hr />
      <hr />
      <hr />
      <h2>
        <strong>Hola creador</strong>
      </h2>
      <button onClick={() => alert("Bienvenido")}>Mostrar alerta</button>
    </div>
  );
};
