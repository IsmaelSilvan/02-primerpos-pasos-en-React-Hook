import logo from "./logo.svg";
import "./App.css";
import PruebasComponent from "./componentes/PruebasComponent";
// import MiPrimerEstado from "./componentes/MiPrimerEstado";
// import RepasoComponent from "./componentes/Ejercicio repaso/RepasoComponent";

function App() {
  // const yearActual = new Date().getFullYear();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <h1>El estado en React - Hook useState</h1>
        <MiPrimerEstado />
        <RepasoComponent yearActual={yearActual}/>  */}
        <PruebasComponent />
      </header>
    </div>
  );
}

export default App;
