// buclesWhile.ts

// Función para verificar si existe un número par en el array de números
function hasEven(myNums: number[]): boolean {
    let i = 0;
    while (i < myNums.length) {
        if (myNums[i] % 2 === 0) {
            return true;
        }
        i++;
    }
    return false;
}

// Función para verificar si todos los nombres empiezan por M
function startWithM(myNames: string[]): boolean {
    let i = 0;
    while (i < myNames.length) {
        // @ts-ignore
        if (!myNames[i].startsWith('M')) {
            return false;
        }
        i++;
    }
    return true;
}


