// Desde ES6, podemos crear strings con variables encapsulándolos entre acentos graves (``) y añadiendo las variables dentro de la sintaxis ${}
const a = 5;

// Sintaxis anterior
console.log("Tengo " + a + " manzanas");
// Sintaxis ES6
console.log(`Tengo ${a} manzanas`);

/**
 * Otra funcionalidad que introdujo ES6 son los argumentos por defecto en las funciones
 * Se añaden asignando un valor al argumento
 */
const miFuncion = (arg = 1) => arg * 10; // arg es 1 por defecto
console.log(miFuncion()); // 10
console.log(miFuncion(5)); // 50

/**
 * La asignación por destructuración es una funcionalidad que permite extraer de un objeto o un array los elementos que necesitamos.
 */
const persona = {
    nombre: "Juan",
    direccion: {
        calle: "Buenos Aires",
        numero: 12
    }
}

// Extraemos el nombre y la direccion y los guardamos variables
// Para poder extraerlos, debemos poner entre llaves el nombre exacto de la variable que extraemos, que será el nombre de la variable creada
const { nombre, direccion } = persona;
console.log(nombre);
console.log(direccion);

// Podemos renombrar la variable creada utilizando : y el nombre que queremos darle
const { nombre: nombreDePila } = persona;
console.log(nombreDePila); // Juan

// Para desestructurar objetos anidados, utilizamos la siguiente sintaxis
const { direccion: { calle } } = persona;
console.log(calle); // Buenos Aires

// También podemos desestructurar arrays
const marcas = ["Asus", "MSI", "Lenovo", "Acer"];

const [marca1, marca2, marca3] = marcas;
console.log(marca1, marca2, marca3); // Asus MSI Lenovo

/**
 * A la hora de crear un objeto, si tenemos un atributo cuyo valor está contenido dentro de una variable con el mismo nombre,
 * podemos abreviar la sintaxis eliminando la asignación del valor:
 */
const nuevoObjeto = {
    marcas: marcas,
}
// Se convierte en:
const nuevoObjeto2 = {
    marcas
}