import {Vector} from "./Vector"

let vectorPrincipal = new Vector(5,5);
let vector2 = new Vector(5,7)

console.log("Vector principal")
vectorPrincipal.print();

console.log("Vector 2")
vector2.print();

console.log("Suma de los 2 vectores")
let vectorResultante = vectorPrincipal.add(vector2)
vectorResultante.print();

console.log("Resta de los 2 vectores")
vectorResultante = vectorPrincipal.subs(vector2)
vectorResultante.print();

console.log("Multiplicacion de los 2 vectores")
vectorResultante = vectorPrincipal.mult(vector2)
vectorResultante.print();

let escalar = 3
console.log("multipliciacion Vector principal por el escalar: " + escalar)
vectorResultante = vectorPrincipal.multNumber(escalar)
vectorResultante.print();
