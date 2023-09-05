import React, { useEffect, useState } from "react";

export const AjaxComponent = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [cargando, setCargando] = useState(true); // Por defecto siempre va a estar cargando
  const [errores, setErrores] = useState(""); // Por defecto siempre va a estar cargando

  /*  // Array Generico para que no este vacio
  const getUsuariosEstaticos = () => {
    setUsuarios([
      {
        id: 48546878,
        email: "ismael.silvan@reqres.in",
        first_name: "Ismael",
        last_name: "Silván",
        avatar: "",
      },
      {
        id: 36547815,
        email: "adrian.barrios@reqres.in",
        first_name: "Adrian",
        last_name: "Barrios",
        avatar: "",
      },
      {
        id: 98574826,
        email: "flanagan.lolailo@reqres.in",
        first_name: "Flanagan",
        last_name: "Lolailo",
        avatar: "",
      },
    ]);
  };
  //
  //
  //
  // Opcion_a. Recoger esos datos por Ajax de nuestra base de datos por una promesa, en este caso de pruebas de https://reqres.in/
  const getUsuariosAjaxPms = () => {
    fetch("https://reqres.in/api/users?page=1")
      .then((respuesta) => respuesta.json()) // Convierto la respuesta en un objeto JSON
      .then((resultado_final) => {
        // console.log(resultado_final);
        setUsuarios(resultado_final.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Opcion_a. UseEffect
  useEffect(() => {
    getUsuariosAjaxPms(); // Realizo el método que realiza la promesa y rellena mi array
    if (usuarios.length <= 0) {
      // Si mi array esta vacio, lo relleno con el método estatico
      getUsuariosEstaticos();
    }
  }, [usuarios.length]);
  // */
  //
  //
  //
  // Opcion_b. Recoger esos datos por Ajax con Async y Await
  const getUsuariosAjaxAW = () => {
    setTimeout(async () => {
      try {
        const peticion = await fetch("https://reqres.in/api/users?page=2"); // Espero al resultado que me devuelve el fetch
        const { data } = await peticion.json(); // Desestructuro los datos y unicamente cojo su información de data

        setUsuarios(data);
      } catch (error) {
        console.log(error);
        setErrores(error.message);
      }
      setCargando(false);
    }, 2000); // Cuando los datos son cargados, pongo la propiedad cargando a false, pero para que se pueda ver le he puesto un delay
  };

  // Opcion_b. UseEffect
  useEffect(() => {
    getUsuariosAjaxAW();
  }, []);
  //
  //
  //
  if (errores !== "") {
    // Plantilla cuando sucede algun error
    return (
      <div>
        <h3>{errores}</h3>
      </div>
    );
  } else if (cargando) {
    // Plantilla cuando estoy cargando la base de datos
    return (
      <div style={{ position: "relative" }}>
        <img
          src="https://apptimize.com/wp-content/uploads/2015/10/Ajax-loader.gif"
          alt="cargando imagen"
        />
        <h3 style={{ marginTop: -125 + "px" }}>Cargando datos…</h3>
      </div>
    );
  } else {
    // Plantilla base si todo ha funcionado perfectamente
    return (
      <div>
        <h2>Listado de usuarios</h2>

        <ol className="lista_usuarios">
          {usuarios.map((usuario) => {
            return (
              <li className="usuario_listado" key={usuario.id}>
                <img
                  src={usuario.avatar}
                  alt={usuario.first_name + usuario.last_name}
                />
                <span>
                  {"..."}
                  {usuario.first_name} {usuario.last_name}
                </span>
              </li>
            );
          })}
        </ol>
      </div>
    );
  }
};
