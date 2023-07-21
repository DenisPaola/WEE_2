import {Person} from "./person"

export class Contacts{

    public people: Person[];
        
    constructor (){
        this.people = [];
    }

    public printCalendar():void{
        this.people.forEach(person => {
            console.log(`name: ${person.name}, age: ${person.age}, address: ${person.getAddress()}`)
        })
    }

}
