/**
 * Una promesa es un objeto que representa una operación asíncrona que eventualmente será completada (con o sin errores).
 * Para crear una promesa se pasa una función que recibe como parámetros las funciones resolve y reject.
 * La función resolve indica que la promesa se ha resuelto correctamente
 * La función reject indica un error en la promesa
 */
function resolverPromesa(num) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      if (num <= 5) resolve("Correcto");
      else reject("Error");
    }, 300);
  });
}

/**
 * Para recibir los resultados de una promesa, se encadena una función then(valorResuelto) o catch(valorError).
 */
resolverPromesa(4) // Esta promesa llamará a la función then(), ya que se resuelve correctamente
  .then(valor => console.log(valor)) // Correcto
  .catch(error => console.error(error));

resolverPromesa(6) // Esta promesa falla en la resolucion, y ejecuta la función catch()
  .then(valor => console.log(valor))
  .catch(error => console.error(error)); // Error

/**
 * Se pueden encadenar sentencias then() si la anterior devuelve una nueva promesa
 */
resolverPromesa(2)
  .then(
    valor =>
      new Promise((resolve, reject) =>
        setTimeout(() => resolve(valor.substr(0, 1)), 500)
      ) // Devuelve una promesa
  )
  .then(nuevoValor => console.log(nuevoValor)) // C
  .catch(error => console.error(error));

/**
 * A partir de ES8, la nueva sintaxis async/await fue añadida para resolver promesas.
 * Funciona del mismo modo que la sintaxis .then().catch(), pero es más sencillo a la hora de leer
 * Para utilizarla, se debe decorar la función con la palabra reservada async, y el código asíncrono con await
 * Para capturar errores, se debe encapsular el código entre bloques try/catch
 */

// Funciones de ES5
async function funcionAsincrona(n) {
  try {
    const valorResuelto = await resolverPromesa(n);
    console.log(valorResuelto);
  } catch (error) {
    console.error(error);
  }
}

// Funciones flecha de ES6
// Se omiten los paréntesis ya que solo hay un argumento
const funcionFlechaAsincrona = async n => {
  try {
    const valorResuelto = await resolverPromesa(n);
    console.log(valorResuelto);
  } catch (error) {
    console.error(error);
  }
};

funcionAsincrona(4); // Correcto
funcionFlechaAsincrona(6); // Error
