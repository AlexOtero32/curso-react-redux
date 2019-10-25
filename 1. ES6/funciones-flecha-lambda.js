/**
 * Una función anónima o función lambda es una función que no está asignada a un identificador.
 * Se utilizan generalmente como expresiones que se pasan a funciones de orden superior, o funciones que se ejecutan sólo una vez.
 */

// La función map recibe una función de iteración.
const array = [1, 2, 3, 4];

function iterador(valor) {
  return valor * 2;
}

// Ejecuta map con una función nombrada (iterador)
console.log(array.map(iterador)); // [1, 4, 9, 16]

// Ejecuta map con una función anónima
array.map(function (valor) {
  return valor * 2;
}); // [1, 4, 9, 16]

/**
 * A partir de ES6, existe un nuevo método para declarar funciones sin necesidad de utilizar la palabra reservada function.
 * Las llamadas funciones flecha se crean declarando los parámetros entre paréntesis, una flecha =>, y un bloque de llaves como una función normal.
 * () => {}
 */
array.map((valor) => {
  return valor * 2;
}); // [1, 4, 9, 16]

// Además, las funciones flecha permiten ciertas modificaciones en el código que facilitan la legibilidad.
// Si solo tenemos un argumento, las funciones flecha pueden omitir los paréntesis:
array.map(valor => {
  return valor * 2;
});

// Si no se realiza ningún cálculo previo a la declaración return, podemos omitir las llaves y la declaración return:
array.map(valor => valor ** 2);

// Las funciones flecha pueden asignarse a una variable, convirtiéndolas en variables nombradas
const hola = valor => console.log(valor);
hola("¿Qué tal?");

/**
 * El valor de this en las funciones flecha es diferente al de las funciones normales de ES5
 * En las funciones flecha no es necesario utilizar el método bind() para pasar el valor de this, la función flecha se encarga de ello.
 * En las funciones normales de ES5, this hace referencia al objeto que llama a la función. Puede ser el objeto window, document, un botón, etc.
 * Por defecto, las funciones flecha no tienen la palabra reservada this ni arguments
 * En el siguiente ejemplo, el valor de this en la función saludar1 hace referencia al objeto global, en el que no existe la variable "nombre"
 */
const persona = {
  nombre: "Juan",
  saludar1: () => "Hola, me llamo " + this.nombre,
  saludar2: function () {
    return "Hola, me llamo " + this.nombre;
  },
  saludar3() { // Sintaxis corta
    return "Hola, me llamo " + this.nombre;
  }
}

console.log(persona.saludar1()); // Hola, me llamo undefined
console.log(persona.saludar2()); // Hola, me llamo Juan
console.log(persona.saludar3()); // Hola, me llamo Juan