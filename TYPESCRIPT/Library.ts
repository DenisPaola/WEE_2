import {Book} from "./Book"

export class Library {

    private books: Book[];
    private address: string;
    private manager: string;
    
    constructor(books:Book[], address:string, manager:string){
        this.books = books;
        this.address = address;
        this.manager = manager;
    }
    
    public getAddress():string{
        return this.address

    }

    public setAddress(address:string):void{
        this.address = address
    }

    public getManager():string{
        return this.manager

    }

    public setManager(manager:string):void{
        this.manager = manager

    }

    public getNumberOfBooks():number {
        return this.books.length
    }

    /* filtra todos los libros en donde el author que paso por parametro sea igual a cada author de cada 
    instancia de libro contenido en el array de libros */
    public findByAuthor(author:string):Book[]{
        return this.books.filter(book => author === book.getAuthor())
    }

    public toString(): string{
        let libraryInfo = ''
        this.books.forEach((book, i) => {
            libraryInfo += `Book${i + 1}:\n${book.toString()}`
        })
        return libraryInfo;
    }
}






