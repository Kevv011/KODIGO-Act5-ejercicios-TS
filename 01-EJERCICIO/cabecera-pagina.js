//Clase cabeceraPagina
var cabeceraPagina = /** @class */ (function () {
    //Constructor
    function cabeceraPagina(tituloParam, colorParam, fuenteParam, alineacionParam) {
        if (alineacionParam === void 0) { alineacionParam = "izquierda"; }
        this.titulo = tituloParam;
        this.color = colorParam;
        this.fuente = fuenteParam;
        this.alineacion = alineacionParam; //Alineacion por defecto es "izquierda"
    }
    //Metodo #1 "propiedadesPagina"
    cabeceraPagina.prototype.propiedadesPagina = function () {
        return {
            titulo: this.titulo,
            color: this.color,
            fuente: this.fuente
        };
    };
    //Metodo #2 "alineacionPagina"
    cabeceraPagina.prototype.alineacionPagina = function (alineacion) {
        this.alineacion = alineacion;
    };
    //Metodo #3 "impresionPropiedades"
    cabeceraPagina.prototype.impresionPropiedades = function () {
        console.log("Titulo: " + this.titulo);
        console.log("Color: " + this.color);
        console.log("Fuente: " + this.fuente);
        console.log("Alineacion: " + this.alineacion);
    };
    return cabeceraPagina;
}());
//Instancia de la clase cabeceraPagina para probar los metodos
var cabecera = new cabeceraPagina("mi pagina", "Azul", "Arial", "izquierda");
cabecera.impresionPropiedades();
