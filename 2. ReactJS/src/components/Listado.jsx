import React from "react";

/**
 * En este Componente no necesitaremos state ni ciclos de vida (a priori),
 * así que utilizaremos un componente funcional en lugar de una clase.
 */

const Listado = props => (
  <ul>
    {props.children}
  </ul>
);

export default Listado;