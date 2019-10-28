import React from "react";
import Listado from "./components/Listado.jsx";
import Item from "./components/Item.jsx";

const App = () => {
  return (
    <>
      <h1>Tareas</h1>
      <Listado>
        <Item title="Ir a la compra"/>
        <Item title="Aprender React"/>
        <Item title="Poner la lavadora"/>
      </Listado>
    </>
  );
};

export default App;