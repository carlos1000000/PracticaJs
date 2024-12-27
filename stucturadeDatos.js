
//estructura de datos en js

//arrays
let frutas = ["Manzana", "Banana", "Naranja"];
console.log(frutas[0]); // Manzana
console.log(frutas[1]); // Banana
console.log(frutas[2]); // Naranja

//mtodos de arrays
//push
frutas.push("Uva"); // Añadir un elemento al final

//pop
frutas.pop(); // Eliminar el último elemento

//shift
frutas.shift(); // Eliminar el primer elemento

//unshift
frutas.unshift("Fresa"); // Añadir un elemento al inicio

//recorrer un array
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}   

// dicionarios clave valor de las notas musicales referencia a los hrz de las notas
let notasMusicales = {
    do: 261.63,
    re: 293.66,
    mi: 329.63,
    fa: 349.23,
    sol: 392.00,
    la: 440.00,
    si: 493.88
};

console.log(notasMusicales["do"]); // 261.63


//sets
let numeros = new Set();

numeros.add(5);
numeros.add(10);
numeros.add(5); // No se añade porque ya existe

console.log(numeros.size); // 2

//metodos de sets
//add
numeros.add(15);

//delete
numeros.delete(5);

//has
console.log(numeros.has(10)); // true


//maps
let personas = new Map();

personas.set("Ana", 30);
personas.set("Juan", 34);

console.log(personas.get("Ana")); // 30

//metodos de maps

