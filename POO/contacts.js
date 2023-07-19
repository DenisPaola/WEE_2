let person = require('./person');
class Contacts{

    constructor(){
       this.persons = []       
    }

    printPersons(){
        this.persons.forEach((person) => {
            person.printall()
        });
    }

}

let contacts = new Contacts();

let person1 = new person.Persona("Diana Carolina","Gonzales Alayo",1980,60,1.5,["correr","futbol","padel"])
let person2 = new person.Persona("Miguel Ignacio", "Sanchez Morales", 1970,70,1.6,["leer","play","ajedrez"])

contacts.persons.push(person1)
contacts.persons.push(person2)

contacts.printPersons();


module.exports.Persona = person.Persona
module.exports.Contacts = Contacts