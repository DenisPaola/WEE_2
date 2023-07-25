import {Mobile} from './mobile'

//Crear un nuevo objeto myMobile de la clase Mobile

const myMobile = new Mobile("Paola","samsumg", "S1000", "Black", 500)

//probando los metodos(getters)

console.log("\nDatos del mobil:");
console.log(`Nombre:` + myMobile.getName());
console.log(`Marca:` + myMobile.getTrademark());
console.log(`Modelo:` + myMobile.getModel());
console.log(`Color:` + myMobile.getColor());
console.log(`Precio:` + myMobile.getPrice());

//probando los metodos(setters)-modificando datos

myMobile.setTrademark("Xiaomi");
myMobile.setModel("Mi10TPRO");
myMobile.setPrice(350);

// imprimiendo Nuevos resultados

console.log("\nDatos actuales del mobil:");
console.log(`Nombre:` + myMobile.getName());
console.log(`Marca:` + myMobile.getTrademark());
console.log(`Modelo:` + myMobile.getModel());
console.log(`Color:` + myMobile.getColor());
console.log(`Precio:` + myMobile.getPrice());

//imprimiento caracteristicas de Mymobile
myMobile.printCharacteristics();

const mobile1 = new Mobile("Jose","samsumg", "S20", "White", 700)
const mobile2 = new Mobile("Xiara","apple", "i-PHONE14", "Rosa", 1200)
const mobile3 = new Mobile("Jhon","motorola", "X45", "Black", 400)
const myMobiles = [mobile1, mobile2, mobile3]

//Mostrar los datos de myMobiles invocando al método del punto 1.

for (const mobile of myMobiles){
    mobile.printCharacteristics();
}

