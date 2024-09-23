//Clase abstracta persona
abstract class Persona {

    //Atributos
    nombre: string;
    apellido: string;
    direccion: string;
    telefono: number;
    edad: number;

    //Constructor
    constructor(nombreParam: string, apellidoParam: string, direccionParam: string, telefonoParam: number, edadParam: number) {
        this.nombre = nombreParam;
        this.apellido = apellidoParam;
        this.direccion = direccionParam;
        this.telefono = telefonoParam;
        this.edad = edadParam;
    }

    //Metodo para saber si una persona es mayor o no
    verificarEdad(): void {
        if (this.edad < 0 || this.edad > 100) {
            console.log("INGRESE UNA EDAD VALIDA");
        } else {
            if (this.edad >= 18) {
                console.log("La edad de " + this.nombre + " es: " + this.edad + " [MAYOR DE EDAD]");
            } else {
                console.log("La edad de " + this.nombre + " es: " + this.edad + " [MENOR DE EDAD]");
            }
        }

    }

    //metodo abstarcto para mostrar todos los datos personales
    abstract mostrarDatosPersonales(): void;
}



//Clase empleado
class Empleado extends Persona {

    //Atributos
    sueldo: number;

    //Constructor
    constructor(nombreParam: string, apellidoParam: string, direccionParam: string, telefonoParam: number, edadParam: number, sueldoParam: number) {
        super(nombreParam, apellidoParam, direccionParam, telefonoParam, edadParam); //Mnada a llamar al constructor de la clase padre
        this.sueldo = sueldoParam;
    }

    //Metodo para cargar sueldo
    cargarSueldo(sueldo: number): void {
        this.sueldo = sueldo;
    }

    //Metodo para imprimir sueldo
    imprimirSueldo(): void {
        console.log("El sueldo de " + this.nombre + " es: " + this.sueldo);
    }

    //Meotodo para mostrar todos los datos personales (metodo abstracto)
    mostrarDatosPersonales(): void {
        console.log("Nombre: " + this.nombre);
        console.log("Apellido: " + this.apellido);
        console.log("Direccion: " + this.direccion);
        console.log("Telefono: " + this.telefono);
        console.log("Edad: " + this.edad);
        console.log("Sueldo: " + this.sueldo);
    }
}

//Ejemplo definiendo un objeto de la clase empleado
let empleado = new Empleado("Kevin", "Arevalo", "san salvador", 123456, 21, 1000);
empleado.verificarEdad();
empleado.mostrarDatosPersonales();
empleado.imprimirSueldo();
empleado.cargarSueldo(2000);
empleado.imprimirSueldo();
