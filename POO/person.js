class Persona {

    lugarNacimiento = "Madrid"
    
    constructor (nombre,apellido,anyoNacimiento,peso,altura,hobbies){
        
        this.nombre = nombre
        this.apellido = apellido
        this.anyoNacimiento = anyoNacimiento
        this.peso = peso
        this.altura = altura
        this.IMC = peso/(altura*altura)
        this.edad = 2023 - anyoNacimiento
        this.hobbies = hobbies
        
    }
    saludo(){
        console.log(`Buenos dias mi nombre es ${this.nombre} ${this.apellido}, naci en el año ${this.anyoNacimiento}  y soy de la ciudad de ${this.lugarNacimiento}.`)}
    
    calculoIMC(){

        let IMC = this.peso/(this.altura*this.altura)
        console.log(`con un IMC de: ${IMC}`);
    }  

    calculoEdad(){

        let edad = 2023 - this.anyoNacimiento
        console.log(` Y mi Edad es: ${edad}`);
    }

    printall(){

        console.log(`
            nombre_ ${this.nombre}
            apellido_${this.apellido}
            anyonacimiento_${this.anyoNacimiento}
            peso_${this.peso}
            altura_${this.altura}
            IMC_${this.peso/(this.altura*this.altura)}
            edad_${this.edad}`)}
    
    agregarhobbies(hobbies){

        this.hobbies.push([hobbies])           
    
    }
    
    printhobbies(){
        return this.hobbies;
    }
    }   
        
    let persona1 = new Persona("Diana Carolina","Gonzales Alayo",1980,60,1.5,["correr","futbol","padel"])
    console.log(persona1);
    console.log(persona1.lugarNacimiento);
    persona1.saludo();
    persona1.calculoIMC();
    persona1.calculoEdad()
    persona1.printall();
    console.log("hobbie:" + persona1.printhobbies(["correr","futbol","padel"]));

    let persona2 = new Persona("Miguel Ignacio", "Sanchez Morales", 1970,70,1.6,["leer","play","ajedrez"])
    console.log(persona2);

    persona2.anyoNacimiento = 1975
    persona2.edad = 2023 -this.anyoNacimiento  

    console.log(persona2);
    persona2.saludo();
    persona2.calculoIMC();
    persona2.calculoEdad();
    persona2.printall();
    console.log("hobbie:" + persona2.printhobbies(["leer","play","ajedrez"]));


    module.exports.Persona = Persona;
