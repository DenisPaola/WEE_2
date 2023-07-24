
//Realizar una función que te imprima por consola el siguiente mensaje:

function isEven(number: number): void {
    if (number % 2 === 0) {
        console.log("El número es par"); //si el numero introducido como parámetro de entrada es par
    } else {
        console.log("El número es impar"); //si el numero introducido como parámetro de entrada es impar
    }
}

export { isEven };