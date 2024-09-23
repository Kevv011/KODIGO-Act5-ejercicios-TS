//Clase cabeceraPagina
class cabeceraPagina {
    titulo: string;
    color: string;
    fuente: string;
    alineacion: "izquierda" | "derecha" | "centro";

    //Constructor
    constructor(tituloParam: string, colorParam: string, fuenteParam: string, alineacionParam: "izquierda" | "derecha" | "centro" = "izquierda") {
        this.titulo = tituloParam;
        this.color = colorParam;
        this.fuente = fuenteParam;          
        this.alineacion = alineacionParam; //Alineacion por defecto es "izquierda"
    }

    //Metodo #1 "propiedadesPagina"
    propiedadesPagina() {
        return {
            titulo: this.titulo,
            color: this.color,
            fuente: this.fuente
        };
    }

    //Metodo #2 "alineacionPagina"
    alineacionPagina(alineacion: "izquierda" | "derecha" | "centro") {
        this.alineacion = alineacion;
    }

    //Metodo #3 "impresionPropiedades"
    impresionPropiedades() {
        console.log("Titulo: " + this.titulo);
        console.log("Color: " + this.color);
        console.log("Fuente: " + this.fuente);
        console.log("Alineacion: " + this.alineacion);
    }
}

//Instancia de la clase cabeceraPagina para probar los metodos
let cabecera = new cabeceraPagina("mi pagina", "Azul", "Arial", "izquierda");
cabecera.impresionPropiedades();
