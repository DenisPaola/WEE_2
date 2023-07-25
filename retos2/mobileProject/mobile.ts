// crear clase Mobile con atributos privados:

export class Mobile{

    private name: string
    private trademark: string
    private model: string
    private color: string
    private price: number

    //constructor de la clase con mismos parámetros de entrada que atributos.

    constructor(name:string, trademark:string, model:string, color:string, price:number){
        this.name = name
        this.trademark = trademark
        this.model = model
        this.color = color
        this.price = price
    }

    //crear los setters para todos los atributos de la clase
    setName(name:string):void{
        this.name = name
    }

    setTrademark(trademark:string):void{
        this.trademark = trademark
    }

    setModel(model:string):void{
        this.model = model
    }

    setColor(color:string):void{
        this.color = color
    }

    setPrice(price:number):void{
        this.price = price
    }

    //crear los getters de todos los atributos de la clase

    getName():string {
        return this.name
    }

    getTrademark():string{
        return this.trademark
    }

    getModel():string{
        return this.model
    }

    getColor():string{
        return this.color
    }

    getPrice():number{
        return this.price
    }

    // crear método que imprima todas las características de la clase:
    printCharacteristics():void{

        console.log(`The characteristic of the mobil name are:

            Name: ${this.name},
            Trademark: ${this.trademark},
            Model: ${this.model},
            Color: ${this.color},
            Price: ${this.price}`)
    }

}






