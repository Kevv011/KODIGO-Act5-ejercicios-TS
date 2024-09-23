//Clase cuenta
class Cuenta {

    //Atributos
    nombre: string;
    cantidad: number;
    tipoCuenta: string;
    numeroCuenta: number;

    //Constructor
    constructor(nombreParam: string, cantidadParam: number, tipoCuentaParam: string, numeroCuentaParam: number) {
        this.nombre = nombreParam;
        this.cantidad = cantidadParam;
        this.tipoCuenta = tipoCuentaParam;
        this.numeroCuenta = numeroCuentaParam; 
    }

    //Metodo depositar
    depositar(cantidad: number): void {
        if (cantidad < 5) {  //Condicion para que el valor a depositar sea mayor a $5.00
            console.log("El valor a depositar debe ser mayor a $5.00");
        } else { 
            this.cantidad += cantidad;
            console.log("Se ha depositado correctamente");
        }
    }

    //Metodo retirar
    retirar(valor: number): void {
        if (valor > this.cantidad) {  //Condicion si hay menos de $5 en la cuenta
            console.log("Saldo insuficiente");
        } 
        else if (valor < 5) {  //Condicion para que el valor a retirar sea mayor a $5.00
            console.log("El valor a retirar debe ser mayor a $5.00");
        }
        else {
            this.cantidad -= valor;
            console.log("Retiro exitoso");
        }
    }

    //Metodo para mostrar los datos de la cuenta
    mostrarDatos(): void {
        console.log(" ");
        console.log("Nombre: " + this.nombre);
        console.log("Cantidad: " + this.cantidad);
        console.log("Tipo de cuenta: " + this.tipoCuenta);
        console.log("Numero de cuenta: " + this.numeroCuenta);
    }
}

//Ejemplo de uso de la clase cuenta
let cuenta = new Cuenta("Kevin Arevalo", 100, "Ahorros", 123456789);
cuenta.depositar(20);
cuenta.retirar(50);
cuenta.mostrarDatos();
