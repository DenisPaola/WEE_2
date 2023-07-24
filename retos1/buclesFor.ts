// buclesFor.ts

// Función para imprimir los números impares hasta el número indicado
function evenNumbers(num: number): void {
    for (let i = 1; i <= num; i += 2) {
        console.log(i);
    }
}

// Función para revertir un array sin usar el método reverse()
function myRevert(myArr: any[]): any[] {
    const revertedArr = [];
    for (let i = myArr.length - 1; i >= 0; i--) {
        revertedArr.push(myArr[i]);
    }
    return revertedArr;
}

// Función para verificar si un color está en el arcoíris
function isRainbow(colors: string[]): void {
     for (const color of colors) {
        // @ts-ignore
        if (rainbowColors.find(color => color.toLowerCase() == color)) {
            console.log(`${color} está en el arcoíris.`);
        } else {
            console.log(`${color} no está en el arcoíris.`);
        }
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

console.log(myRevert([1,2,3]))

export { add };
