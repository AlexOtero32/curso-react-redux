/**
 * Estas son sólo algunas de las funciones que más usaremos a la hora de trabajar con arrays en React.
 * Para un listado completo de funciones, visitar la documentación de MDN sobre arrays.
 * @see https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array
 */

const array = ["Perro", "Gato", "Caballo", "Pez", "Serpiente"];

/**
 * @see https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/map
 * Array.prototype.map
 * Recibe como argumento una función que recorre el array, devolviento un nuevo array con los elementos modificados.
 * El array original no es modificado.
 */
function usandoMap() {
  const nuevoArray = array.map(function(elemento) {
    return elemento.toUpperCase(); // Transforma cada elemento a mayúsculas
  });

  console.log(array); // [ 'Perro', 'Gato', 'Caballo', 'Pez', 'Serpiente' ];
  console.log(nuevoArray); // [ 'PERRO', 'GATO', 'CABALLO', 'PEZ', 'SERPIENTE' ]
}

/**
 * @see https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/filter
 * Array.prototype.filter
 * Recibe como argumento una función. Devuelve un array con los elementos que cumplan la condición dada.
 * El array original no es modificado.
 */
function usandoFilter() {
  const nuevoArray = array.filter(function(elemento) {
    return elemento.length < 5; // Filtra las palabras con menos de 5 caracteres
  });

  console.log(array); // [ 'Perro', 'Gato', 'Caballo', 'Pez', 'Serpiente' ]
  console.log(nuevoArray); // [ 'Gato', 'Pez' ]
}

/**
 * @see https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/find
 * Array.prototype.find
 * Devuelve el valor del primer elemento del array que cumple la condición de prueba proporcionada.
 * Para obtener el índice del elemento, utilizar Array.prototype.findIndex o Array.prototype.indexOf
 * Para saber si un elemento existe dentro de un array, utilizar Array.prototype.includes
 */
function usandoFind() {
  const elemento = array.find(function(elemento) {
    return elemento.length < 5;
  });

  console.log(elemento); // Gato
}

usandoMap();
usandoFilter();
usandoFind();
