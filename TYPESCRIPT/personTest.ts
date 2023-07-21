import {Person} from "./person"

let persona = new Person("Omar", 32, "Huertas 32")

persona.printName();
console.log(persona.yearOfBirth(2023));
console.log(persona.getAddress());
persona.setAddress("Caramuel 12")
console.log(persona.getAddress());
