import React, { useState } from "react";
import PropTypes from "prop-types";

const RepasoComponent = ({ yearActual }) => {
  const [yearIndicado, setYear] = useState(yearActual);

  const mas_menos_1 = (incremeto) => {
    setYear(yearIndicado + incremeto);
    console.log(yearIndicado);
  };

  const cambiarYear = (numero) => {
    setYear(parseInt(numero));
  };

  return (
    <div>
      <h3>RepasoComponent</h3>
      <div className="comprobacion-caja">
        <span >- {yearIndicado} -</span>
      </div>
      <div className="botones-calculo-year">
        <button id="restar-year" onClick={() => mas_menos_1(-1)}>
          Restar <strong>-1</strong> año
        </button>
        <button id="sumar-year" onClick={() => mas_menos_1(1)}>
          Sumar <strong>+1</strong> año
        </button>
      </div>
      <div id="form-year">
        <label for="year-input">Indica un año para cambiarlo</label>
        <input
          id="year-input"
          type="number"
          onChange={(e) => cambiarYear(e.target.value)}
          placeholder="____________"
        />
      </div>
  
    </div>
  );
};

RepasoComponent.propTypes = {
    yearActual: PropTypes.number.isRequired
};

export default RepasoComponent;
