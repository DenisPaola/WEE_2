import { MobileCollection } from "./mobileCollection";
import { Mobile } from "./mobile";

const mobile1 = new Mobile("Diana","samsumg", "S10", "White", 700)
const mobile2 = new Mobile("Monica","apple", "i-PHONE14", "Rosa", 1200)
const mobile3 = new Mobile("Celia","motorola", "X45", "rosa", 200)
const mobile4 = new Mobile("vero","samsumg", "S20", "White", 600)
const arrayMobiles = [mobile1, mobile2, mobile3, mobile4]

const myCollection= new MobileCollection( arrayMobiles)


//Coleccion de mobiles

console.log(myCollection.getMobiles());


// Mostrar Coleccion de mobiles

myCollection.printCollection();


//Precio de mobiles:

console.log("\nPrecio1:" , mobile1.getPrice());
console.log("Precio2:" , mobile2.getPrice());
console.log("Precio3:" , mobile3.getPrice());
console.log("Precio4:" , mobile4.getPrice());


//Precio total colleccion de mobiles:

console.log(myCollection.getTotalPricesCalculation());







