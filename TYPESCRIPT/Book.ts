export class Book{

    private title: string;
    private nPages: number;
    private isbn: string;
    private author: string;
    private editorial: string;

    constructor(title:string, nPages:number, isbn:string, author:string, editorial:string){
        this.title = title;
        this.nPages = nPages;
        this.isbn = isbn;
        this.author = author;
        this.editorial = editorial;
    }

    public getTitle():string{
        return this.title;    
    }

    public setTitle(title:string):void{
        this.title = title;
    }

    public getnPages():number{
        return this.nPages;
    }

    public setnPages(nPages:number):void{
        this.nPages = nPages;
    }

    public getIsbn():string{
        return this.isbn;
    }

    public setIsbn(isbn:string):void{
        this.isbn = isbn;
    }

    public getAuthor():string{
        return this.author;
    }

    public setAuthor(author:string):void{
        this.author = author;
    }

    public getEditorial():string{
        return this.editorial;
    }

    public setEditorial(editorial:string):void{
        this.editorial = editorial;
    }

    public toString(): string {
        return `
            Titulo: ${this.title},
            Nª Paginas: ${this.nPages},
            ISBN: ${this.isbn},
            Autor: ${this.author},
            Editorial: ${this.editorial},
        `
    }
}
