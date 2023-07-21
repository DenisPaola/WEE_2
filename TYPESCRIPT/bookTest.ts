import {Book} from "./Book"

let book = new Book("el sexto", 32, "2344476-BC23333", "Cesar Vallejo", "Ediciones AST");
console.log(book);
book.setTitle("El quinto");
console.log(book.getTitle());
book.setnPages(12);
console.log(book.getnPages());
book.setIsbn("24098689-HN90395395");
console.log(book.getIsbn());
book.setAuthor("Gabriel Garcia Marquez");
console.log(book.getAuthor());
book.setEditorial("Prentice Hall");
console.log(book.getEditorial());
console.log(book.toString());

