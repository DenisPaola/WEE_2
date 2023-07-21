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

    
    // public findByAuthor(author:string):Book[]{
    //     return this.book    
    
    // }

    // public toString(): string{
    //     let library = ''
    //     this.books.forEach(  )

    // }
}






