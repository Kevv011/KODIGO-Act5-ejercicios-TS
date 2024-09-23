var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Clase abstracta persona
var Persona = /** @class */ (function () {
    //Constructor
    function Persona(nombreParam, apellidoParam, direccionParam, telefonoParam, edadParam) {
        this.nombre = nombreParam;
        this.apellido = apellidoParam;
        this.direccion = direccionParam;
        this.telefono = telefonoParam;
        this.edad = edadParam;
    }
    //Metodo para saber si una persona es mayor o no
    Persona.prototype.verificarEdad = function () {
        if (this.edad < 0 || this.edad > 100) {
            console.log("INGRESE UNA EDAD VALIDA");
        }
        else {
            if (this.edad >= 18) {
                console.log("La edad de " + this.nombre + " es: " + this.edad + " [MAYOR DE EDAD]");
            }
            else {
                console.log("La edad de " + this.nombre + " es: " + this.edad + " [MENOR DE EDAD]");
            }
        }
    };
    return Persona;
}());
//Clase empleado
var Empleado = /** @class */ (function (_super) {
    __extends(Empleado, _super);
    //Constructor
    function Empleado(nombreParam, apellidoParam, direccionParam, telefonoParam, edadParam, sueldoParam) {
        var _this = _super.call(this, nombreParam, apellidoParam, direccionParam, telefonoParam, edadParam) || this; //Mnada a llamar al constructor de la clase padre
        _this.sueldo = sueldoParam;
        return _this;
    }
    //Metodo para cargar sueldo
    Empleado.prototype.cargarSueldo = function (sueldo) {
        this.sueldo = sueldo;
    };
    //Metodo para imprimir sueldo
    Empleado.prototype.imprimirSueldo = function () {
        console.log("El sueldo de " + this.nombre + " es: " + this.sueldo);
    };
    //Meotodo para mostrar todos los datos personales (metodo abstracto)
    Empleado.prototype.mostrarDatosPersonales = function () {
        console.log("Nombre: " + this.nombre);
        console.log("Apellido: " + this.apellido);
        console.log("Direccion: " + this.direccion);
        console.log("Telefono: " + this.telefono);
        console.log("Edad: " + this.edad);
        console.log("Sueldo: " + this.sueldo);
    };
    return Empleado;
}(Persona));
//Ejemplo definiendo un objeto de la clase empleado
var empleado = new Empleado("Kevin", "Arevalo", "san salvador", 123456, 21, 1000);
empleado.verificarEdad();
empleado.mostrarDatosPersonales();
empleado.imprimirSueldo();
empleado.cargarSueldo(2000);
empleado.imprimirSueldo();
