"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = void 0;
// Función para imprimir los números impares hasta el número indicado.
function evenNumbers(num) {
    for (var i = 1; i <= num; i++) {
        if (i % 2 !== 0) {
            console.log(i);
        }
    }
}
// Función para revertir un array sin usar el método reverse()
function myRevert(myArr) {
    var arrayRevertido = [];
    for (var i = myArr.length - 1; i >= 0; i--) {
        arrayRevertido.push(myArr[i]);
    }
    return arrayRevertido;
}
// Función para verificar si un color está en el arcoíris
function isRainbow(colors) {
    var coloresArcoiris = ["rojo", "naranja", "amarillo", "verde", "añil", "azul", "violeta"];
    var _loop_1 = function (color) {
        coloresArcoiris.forEach(function (colorArcoiris) {
            if (color.toLowerCase() === colorArcoiris) {
                console.log("".concat(color, " est\u00E1 en el arco\u00EDris."));
            }
            else {
                console.log("".concat(color, " no est\u00E1 en el arco\u00EDris."));
            }
        });
    };
    for (var _i = 0, colors_1 = colors; _i < colors_1.length; _i++) {
        var color = colors_1[_i];
        _loop_1(color);
    }
}
// Función para obtener la suma del número de caracteres de las palabras en un array
function add(myWords) {
    var sum = 0;
    for (var _i = 0, myWords_1 = myWords; _i < myWords_1.length; _i++) {
        var word = myWords_1[_i];
        sum += word.length;
    }
    return sum;
}
exports.add = add;
evenNumbers(10);
isRainbow(["verde", "gris", "azul"]);
console.log(add(["verde", "gris", "azul"]));
console.log(myRevert([1, 2, 3]));
