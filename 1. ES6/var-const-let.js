/**
 * var
 * Las variables declaradas con var pueden ser redecladas y reasignadas.
 * Si una variable se declara de nuevo dentro de un bloque diferente, el valor que se asigne dentro del bloque se mantendrá al salir de este.
 */
function usandoVar() {
  var a = "Declarada usando var";
  var a = "Variable redeclarada"; // Declaramos la variable de nuevo

  if (true) {
    var a = "Variable redeclarada en un bloque diferente"; // Declaramos la variable de nuevo dentro de un bloque
  }

  console.log("var", a); // Variable redeclarada en un bloque diferente
}

/**
 * let
 * Las variables declaradas con let pueden ser reasignadas, pero no redeclaradas dentro del mismo bloque.
 * Pueden ser redeclaradas dentro de un bloque diferente, pero el valor que se le asigne solo puede ser accedido dentro de ese bloque.
 */
function usandoLet() {
  let b = "Declarada usando let";

  // Si descomentamos la siguiente línea da error, ya que no se puede declarar de nuevo en el mismo bloque
  // let b = "Variable redeclarada usando let";

  // Sin embargo, sí podemos reasignar su valor
  b = "Variable reasignada";

  if (true) {
    let b = "Hola desde un bloque diferente"; // Redeclarada en un scope diferente
    console.log(b); // Hola desde un bloque diferente
  }

  console.log(b); // Hola usando let
}

/**
 * cosnt
 * Las variables declaradas con const no pueden ser reasignadas ni redeclaradas dentro de su mismo bloque.
 * Al igual que let, pueden ser redeclaradas dentro de un bloque diferente, pero no reasignadas.
 */
function usandoConst() {
  const c = "Constante";

  // La siguiente línea da error, ya que no podemos reasignar
  // c = "Constante reasignada";

  // Tampoco podemos redeclarar
  // const c = "Otro valor";

  if (true) {
    const c = "Un valor diferente en un bloque diferente";
    console.log(c); // Un valor diferente en un bloque diferente
  }

  console.log(c); // Constante
}

/**
 * Podemos declarar un objeto o array utilizando const y modificarlo, pero no reasignarlo
 */
function constArrayObject() {
  const objeto = { a: 1, b: 2, c: 3 };
  const array = ["Pera", "Manzana", "Plátano", "Naranja"];

  // No se puede reasignar la constante
  // objeto = { a: 2, b: 5, c: 9 };
  // array = ["Sandía", "Melón", "Piña"];

  // Sí podemos reasignar un valor
  objeto.a = 8;
  console.log(objeto);

  array[0] = "Piña";
  console.log(array);

  // También podemos añadir o eliminar valores
  array.pop();
  console.log(array);
  array.push("Melocotón");
  console.log(array);

  delete objeto.b;
  console.log(objeto);
  Object.assign(objeto, { xyz: "Hola" }); // Podemos utilizar la clase global Object
  console.log(objeto);
}

usandoVar();
usandoLet();
usandoConst();
constArrayObject();