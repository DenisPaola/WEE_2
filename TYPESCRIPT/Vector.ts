export class Vector {

    private elements: number[];


    //n: longitud del vector
    //k: maximo valor de los elementos del vector
    // 3, 4 => [1,4,3] [2,3,2], [4,1,4]
    constructor (n:number, k:number){
        
        this.elements = Array.from({ length: n }, () =>
            Math.floor(Math.random() * (k + 1))
        )
    }

    public print(): void {
        console.log(this.elements)
    }

    private setElements(elements: number[]): Vector{
        this.elements = elements
        return this;
    }

    //Suma de vectores
    // Vector principal -> [1,2,3]
    // v1               -> [2,3,4]
    //resultado         -> [3,5,7]
    public add(v1: Vector): Vector {
        const resultElements = this.elements.map((element, i) => element + v1.elements[i]);
        return new Vector(resultElements.length, Math.max(...resultElements)).setElements(resultElements);
    }

    public subs(v1: Vector): Vector {
        const resultElements = this.elements.map((element, i) => element - v1.elements[i]);
        return new Vector(1,1).setElements(resultElements)
    }


    public mult(v1: Vector): Vector {
        const resultElements = this.elements.map((element, i) => element * v1.elements[i]);
        return new Vector(1,1).setElements(resultElements)
    }

    //multiplicacion vector por un escalar
    // Vector principal -> 2 * [1,2,3]
    //resultado         -> [2,4,6]
    public multNumber(n: number): Vector {
        const resultElements = this.elements.map((element) => element * n);
        return new Vector(1,1).setElements(resultElements)
    }

}