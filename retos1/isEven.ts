// isEven.ts
function isEven(number: number): void {
    if (number % 2 === 0) {
        console.log("El número es par");
    } else {
        console.log("El número es impar");
    }
}

export { isEven };