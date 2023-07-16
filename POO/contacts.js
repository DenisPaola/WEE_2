class Persona {

    constructor (nombre,apellido, edad, ciudad, pais, direccion, dni){
        
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
        this.ciudad = ciudad
        this.pais = pais
        this.direccion = direccion
        this.dni = dni

    }

}  

class Contacts{

    constructor(){
       this.persons = []       
    }

    printPersons(){
        this.persons.forEach((person) => {
            console.log(`Nombre: ${person.nombre}, Apellido: ${person.apellido}, edad: ${person.edad}, ciudad: ${person.ciudad}, pais: ${person.pais}, direccion: ${person.direccion}, dni: ${person.dni}`)
            
        });
    }

}

let contacts = new Contacts();

let person1 = new Persona("Gabriel","Gutierrez", 40, "Madrid", "España", "Calle Pensamiento 14", "04455673" )
let person2 = new Persona("Carolina","Rodriguez", 44, "Barcelona", "España", "Calle terroristas 1", "04398767" )

contacts.persons.push(person1)
contacts.persons.push(person2)

contacts.printPersons();


module.exports.Persona = Persona
module.exports.Contacts = Contacts