import {Contacts} from "./contacts"
import {Person} from "./person"

let persona1 = new Person("Omar", 32, "Huertas 32")
let persona2 = new Person("GAbriel", 26, "Madrid")
let persona3 = new Person("Denis", 30, "Malaga")

let contacts = new Contacts()
contacts.people.push(persona1, persona2, persona3)

contacts.printCalendar();