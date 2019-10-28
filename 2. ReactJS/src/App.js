import React from "react";
import Listado from "./components/Listado.jsx";
import Item from "./components/Item.jsx";

const datos = [
  { id: 1, title: "Ir a la compra" },
  { id: 2, title: "Aprender React" },
  { id: 3, title: "Poner la lavadora" },
  { id: 4, title: "Poner la lavadora" }
];

const App = () => {
  return (
    <>
      <h1>Tareas</h1>
      <Listado>
        {datos.map(({ title, id }) =>
          <Item title={title} key={id}/>
        )}
      </Listado>
    </>
  );
};

export default App;