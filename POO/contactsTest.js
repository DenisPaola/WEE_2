
let contactsTest = require('./contacts');

let contact = new contactsTest.Contacts();

let person1 = new contactsTest.Persona("Denis","Lozano", 43, "Trujillo", "Peru", "Calle Lima 16", "41617415" )
let person2 = new contactsTest.Persona("Isabel", "Sanchez", 42, "Trujillo", "Peru", "Calle la Perla 22", "40358723")
let person3 = new contactsTest.Persona("Tania","Corrales", 42, "Talara", "Peru", "Calle tesoro 56", "40456784" )


contact.persons.push(person1)
contact.persons.push(person2)
contact.persons.push(person3)

contact.printPersons();
