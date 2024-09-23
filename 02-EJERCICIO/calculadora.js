//clase CALCULADORA
var Calculadora = /** @class */ (function () {
    //constructor
    function Calculadora(num1Param, num2Param) {
        this.num1 = num1Param;
        this.num2 = num2Param;
    }
    //metodos SUMA
    Calculadora.prototype.suma = function () {
        return this.num1 + this.num2;
    };
    //metodos RESTA
    Calculadora.prototype.resta = function () {
        return this.num1 - this.num2;
    };
    //metodos MULTIPLICACION
    Calculadora.prototype.multiplicacion = function () {
        return this.num1 * this.num2;
    };
    //metodos DIVISION
    Calculadora.prototype.division = function () {
        if (this.num2 === 0) {
            throw new Error("No se puede dividir por cero.");
        }
        return this.num1 / this.num2;
    };
    //metodos POTENCIA
    Calculadora.prototype.potencia = function () {
        return Math.pow(this.num1, this.num2);
    };
    //metodos FACTORIAL de num1
    Calculadora.prototype.factorial = function () {
        if (this.num1 == 0) {
            return 1;
        }
        else if (this.num1 < 0) {
            throw new Error("No se puede calcular el factorial de un numero negativo");
        }
        var fact = 1;
        for (var i = 1; i <= this.num1; i++) {
            fact = fact * i;
        }
        return fact;
    };
    return Calculadora;
}());
//Ejemplo de uso de la clase CALCULADORA
var calculadora = new Calculadora(5, 2);
console.log("Suma:", calculadora.suma());
console.log("Resta:", calculadora.resta());
console.log("Multiplicación:", calculadora.multiplicacion());
console.log("División:", calculadora.division());
console.log("Potencia:", calculadora.potencia());
console.log("Factorial de num1:", calculadora.factorial());
