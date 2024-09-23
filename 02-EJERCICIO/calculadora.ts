//clase CALCULADORA
class Calculadora {
    
    //atributos
    num1: number;
    num2: number;

    //constructor
    constructor(num1Param: number, num2Param: number) {
        this.num1 = num1Param;
        this.num2 = num2Param;
    }

    //metodos SUMA
    suma(): number { 
        return this.num1 + this.num2;
    }

    //metodos RESTA
    resta(): number {
        return this.num1 - this.num2;
    }

    //metodos MULTIPLICACION
    multiplicacion(): number {
        return this.num1 * this.num2;
    }

    //metodos DIVISION
    division(): number {
        if (this.num2 === 0) {
            throw new Error("No se puede dividir por cero.");
        }
        
        return this.num1 / this.num2;
    }

    //metodos POTENCIA
    potencia(): number {
        return Math.pow(this.num1, this.num2);
    }

    //metodos FACTORIAL de num1
    factorial(): number {
        if (this.num1 == 0) {
            return 1;
        }
        else if (this.num1 < 0) {
            throw new Error("No se puede calcular el factorial de un numero negativo");
        }

        let fact = 1;
        for (let i = 1; i <= this.num1; i++) {
            fact = fact * i;
        }
        return fact;
    }
}

//Ejemplo de uso de la clase CALCULADORA
let calculadora = new Calculadora(5, 2);
console.log("Suma:", calculadora.suma());  
console.log("Resta:", calculadora.resta());
console.log("Multiplicación:", calculadora.multiplicacion());
console.log("División:", calculadora.division());
console.log("Potencia:", calculadora.potencia());
console.log("Factorial de num1:", calculadora.factorial());