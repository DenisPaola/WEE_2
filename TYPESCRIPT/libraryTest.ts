import {Book} from "./Book"
import {Library} from "./Library"

let book1 = new Book("El principito", 50, "988298-VE9882", "Antoine de Saint", "Emece Editores");
let book2 = new Book("aladino ", 40, "9882635-PW2772", "Anonimo", "Selector");
let book3 = new Book("chao", 230, "123232344", "Gabriel Garcia Marquez", "Editorial hola");
let book4 = new Book("cien años de soledad", 120, "12345-WF4523", "Gabriel Garcia Marquez", "Editorial Sudamericana");

let books = [book1,book2,book3,book4]

let library = new Library(books,"Teruel","Jose");
library.setAddress("Goya");
console.log(library.getAddress());
library.setManager("Maria");
console.log(library.getManager());
console.log(library.toString());
console.log("Cantidad de libros:" + library.getNumberOfBooks())

const author = "Gabriel Garcia Marquez"
console.log(`Buscaremos al autor ${author}`)
const booksByAuthor = library.findByAuthor(author)
booksByAuthor.forEach(book => console.log(book.toString()))