// Función para imprimir los números impares hasta el número indicado
function evenNumbers(num: number): void {
    for (let i = 1; i <= num; i++) {
        if(i % 2 !== 0){
            console.log(i);
        }
    }
}

// Función para revertir un array sin usar el método reverse()
function myRevert(myArr: any[]): any[] {
    const arrayRevertido = [];
    for (let i = myArr.length - 1; i >= 0; i--) {
        arrayRevertido.push(myArr[i]);
    }
    return arrayRevertido;
}

// Función para verificar si un color está en el arcoíris
function isRainbow(colors: string[]): void {
    const coloresArcoiris = ["rojo", "naranja", "amarillo", "verde", "añil", "azul", "violeta"]
    for (const color of colors) {
        coloresArcoiris.forEach(colorArcoiris => {
            if(color.toLowerCase() === colorArcoiris){
                console.log(`${color} está en el arcoíris.`);
            }
            else {
                console.log(`${color} no está en el arcoíris.`);
            }
        })
    }
}

// Función para obtener la suma del número de caracteres de las palabras en un array
function add(myWords: string[]): number {
    let sum = 0;
    for (const word of myWords) {
        sum += word.length;
    }
    return sum;
}

evenNumbers(10)
isRainbow(["verde","gris","azul"])
console.log(add(["verde","gris","azul"]))
console.log(myRevert([1,2,3]))

export { add };
