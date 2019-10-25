/**
 * Una funcionalidad introducida en ES9 (2018) fueron los operadores spread y rest
 * El operador spread permite que un objeto iterable (string, objeto, array, etc) sea expandido utilizando sus elementos o atributos
 */
const objeto1 = { a: 1, b: 2 };
const objeto2 = { c: 3, d: 4 };

console.log(objeto1, objeto2); // { a: 1, b: 2 }, { c: 3, d: 4 }
console.log({ ...objeto1, ...objeto2 }); // { a: 1, b: 2, c: 3, d: 4 }

// En caso de que los objetos que se expanden tengan valores en común, se conserva el valor del último objeto que sobreescriba ese valor:
const objeto3 = { a: 7, e: 5 };
console.log({ ...objeto1, ...objeto2, ...objeto3 });

// También podemos utilizar el operador spread en arrays:
const array1 = [0, 1, 2, 3, 4];
const array2 = ["a", "b", "c", "d"];
console.log(...array1, ...array2, "Hola"); // 0 1 2 3 4 'a' 'b' 'c' 'd' 'Hola'

/**
 * Una función puede recibir un número indefinido de parámetros utilizando el operador rest.
 * Aunque visualmente iguales, el operador rest es lo opuesto al operador spread.
 * Mientras que spread 'expande' los valores de un iterable, rest agrupa los valores en un array
 */
function sumatorio(...numeros) {
  return numeros.reduce((a, b) => a + b, 0);
}

console.log(sumatorio(1, 2)); // 3
console.log(sumatorio(1, 2, 3, 4)); // 10

// Se pueden obtener argumentos antes de utilizar el operador rest
function miFuncion(a, b, ...otros) {
  console.log(a);
  console.log(b);
  console.log(otros);
}

miFuncion(1, 2, "hola", 35, { nombre: "Juan" });
