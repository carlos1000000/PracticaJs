// Declaración de variables
var nombre = "Juan"; // Variable global o de función
let edad = 25; // Variable de bloque
const PI = 3.14159; // Constante, su valor no puede cambiar

// Función declarada
function saludar() {
    console.log("Hola, mundo!");
}

// Llamada a la función
saludar();

// Función expresada
const despedirse = function() {
    console.log("Adiós, mundo!");
};

// Llamada a la función
despedirse();

// Función flecha
const multiplicar = (a, b) => {
    return a * b;
};

function multiplicar2(a, b) {
    return a * b;
}

// Llamada a la función
console.log(multiplicar(2, 3)); // 6

// Declaración de variables
let nombre2 = "Ana";
let edad2 = 30;

// Función declarada
function presentarPersona(nombre, edad) {
    console.log(`Hola, mi nombre es ${nombre} y tengo ${edad} años.`);
}

// Llamada a la función
presentarPersona(nombre2, edad2);

// Función flecha
const sumar = (a, b) => a + b;

// Llamada a la función
console.log(sumar(5, 7)); // 12

// Declaración de un array
let frutas = ["Manzana", "Banana", "Naranja"];

// Acceso a elementos del array
console.log(frutas[0]); // Manzana
console.log(frutas[1]); // Banana
console.log(frutas[2]); // Naranja

// Modificación de un elemento del array
frutas[1] = "Mango";
console.log(frutas[1]); // Mango

// Longitud del array
console.log(frutas.length); // 3

// Recorrer un array
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

// Métodos de arrays
frutas.push("Uva"); // Añadir un elemento al final
console.log(frutas); // ["Manzana", "Mango", "Naranja", "Uva"]

frutas.pop(); // Eliminar el último elemento
console.log(frutas); // ["Manzana", "Mango", "Naranja"]

frutas.unshift("Fresa"); // Añadir un elemento al inicio
console.log(frutas); // ["Fresa", "Manzana", "Mango", "Naranja"]

frutas.shift(); // Eliminar el primer elemento
console.log(frutas); // ["Manzana", "Mango", "Naranja"]

// Encontrar el índice de un elemento
let indice = frutas.indexOf("Mango");
console.log(indice); // 1

// Eliminar un elemento por su índice
frutas.splice(indice, 1); // Elimina 1 elemento en el índice encontrado
console.log(frutas); // ["Manzana", "Naranja"]

// Copiar un array
let copiaFrutas = frutas.slice();
console.log(copiaFrutas); // ["Manzana", "Naranja"]

frutas.filter(fruta => fruta !== "Manzana"); // ["Naranja"]


//bucles

//for
for (let i = 0; i < 5; i++) {
    console.log(i);
}

//while
let j = 0;
while (j < 5) {
    console.log(j);
    j++;
}

//do while
let k = 0;
do {
    console.log(k);
    k++;
} while (k < 5);

//for of
let colores = ["Rojo", "Verde", "Azul"];
for (let color of colores) {
    console.log(color);
}

//for in
let persona = {
    nombre: "Juan",
    edad: 30
};
for (let propiedad in persona) {
    console.log(`${propiedad}: ${persona[propiedad]}`);
}

//if
let edad3 = 18;
if (edad3 >= 18) {
    console.log("Eres mayor de edad");
} else {
    console.log("Eres menor de edad");
}

//switch
let dia = 3;
switch (dia) {
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miércoles");
        break;
    default:
        console.log("Otro día");
}

//try catch
try {
    let numero = "x";
    if (isNaN(numero)) {
        throw new Error("No es un número");
    }
    console.log(numero * numero);
} catch (error) {
    console.log(error.message);
}

frutas.forEach(fruta => console.log(fruta));

