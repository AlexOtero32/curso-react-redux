import React from "react";
import Item from "./Item.jsx";

/**
 * En este Componente no necesitaremos state ni ciclos de vida (a priori),
 * así que utilizaremos un componente funcional en lugar de una clase.
 */

const Listado = ({ tareas }) => (
  <ul>
    {tareas.map(tarea =>
      <Item title={tarea.title} completada={tarea.completada} key={tarea.id}/>
    )}
  </ul>
);

export default Listado;