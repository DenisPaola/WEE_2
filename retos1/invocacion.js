"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Importar las funciones desde los archivos isEven y buclesFor
var isEven_1 = require("./isEven");
var buclesFor_1 = require("./buclesFor");
// Arrays de palabras
var array1 = ["Casa", "Coche", "Ciudad", "Cesta"];
var array2 = ["Barco", "Baca", "Bicicleta", "Balon", "Bisiesto", "Brasil"];
var array3 = ["Venezuela", "Veneno", "Voltaje"];
// Invocación de la función isEven y la función add para cada array
var sumArray1 = (0, buclesFor_1.add)(array1);
var sumArray2 = (0, buclesFor_1.add)(array2);
var sumArray3 = (0, buclesFor_1.add)(array3);
console.log("Array 1:");
console.log("La suma de caracteres es:" + sumArray1);
(0, isEven_1.isEven)(sumArray1);
console.log("\nArray 2:");
console.log("La suma de caracteres es:" + sumArray2);
(0, isEven_1.isEven)(sumArray2);
console.log("\nArray 3:");
console.log("La suma de caracteres es:" + sumArray3);
(0, isEven_1.isEven)(sumArray3);
