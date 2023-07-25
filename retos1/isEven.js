"use strict";
//Realizar una función que te imprima por consola el siguiente mensaje:
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEven = void 0;
function isEven(number) {
    if (number % 2 === 0) {
        console.log("El número es par"); //si el numero introducido como parámetro de entrada es par
    }
    else {
        console.log("El número es impar"); //si el numero introducido como parámetro de entrada es impar
    }
}
exports.isEven = isEven;
isEven(2);
isEven(3);
