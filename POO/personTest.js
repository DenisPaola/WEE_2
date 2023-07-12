let personTest = require('./person');

let person = new personTest.Persona("Fiorela","Miñano",1986,65,1.72,["bailar","nadar"]);

console.log(person.saludo());
console.log(person.calculoIMC());
console.log(person.calculoEdad());
console.log(person.printall());
console.log(person.printhobbies(["bailar","teatro",]));