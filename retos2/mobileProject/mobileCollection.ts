import {Mobile} from './mobile'


export class MobileCollection{

    private mobiles:        Mobile[]
    private totalPrices:    number

    constructor(mobiles:Mobile[]){
        this.mobiles = mobiles
        this.totalPricesCalculation()

    }

    //crear los setters de todos los atributos de la clase:
    setMobiles(mobiles:Mobile[]):void{
        this.mobiles = mobiles
    }

    setTotalPrices(totalPrices:number):void{
        this.totalPrices =totalPrices
    }
   
    //crear los getters de todos los atributos de la clase

    getMobiles():Mobile[] {
        return this.mobiles
    }

    getTotalPrices():number{
        return this.totalPrices
    }

    //metodo para calcular el preciotal de la colección:
    private totalPricesCalculation():void{
        this.mobiles.forEach(mobile => {
            this.totalPrices = mobile.getPrice() + this.totalPrices

        })      
    }

    getTotalPricesCalculation():number{
        return this.totalPrices

    }

    public printCollection():void{
        this.mobiles.forEach(mobile =>{
             console.log(`\nThe characteristic of the mobil name are:`)
             console.log(`Name:  ${mobile.getName()}`)
             console.log(`Trademark:  ${mobile.getTrademark()}`)
             console.log(`Model:  ${mobile.getModel()}`)
             console.log(`Color:  ${mobile.getColor()}`)
             console.log(`Price:  ${mobile.getPrice()}`)
        })
    console.log(`\nPrice overall:` + this.totalPrices)
    }  
}
