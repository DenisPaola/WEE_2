// Importar las funciones desde los archivos isEven y buclesFor
import { isEven } from './isEven';
import { add } from './buclesFor';

// Arrays de palabras
const array1 = ["Casa", "Coche", "Ciudad", "Cesta"];
const array2 = ["Barco", "Baca", "Bicicleta", "Balon", "Bisiesto", "Brasil"];
const array3 = ["Venezuela", "Veneno", "Voltaje"];

// Invocación de la función isEven y la función add para cada array
const sumArray1 = add(array1);
const sumArray2 = add(array2);
const sumArray3 = add(array3); 

console.log("Array 1:");
console.log("La suma de caracteres es:"+ sumArray1);
isEven(sumArray1);

console.log("\nArray 2:");
console.log("La suma de caracteres es:"+ sumArray2);
isEven(sumArray2);

console.log("\nArray 3:");
console.log("La suma de caracteres es:"+ sumArray3);
isEven(sumArray3);
