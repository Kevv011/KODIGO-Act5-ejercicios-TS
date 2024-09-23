//Clase cancion
var Cancion = /** @class */ (function () {
    //Constructor
    function Cancion(tituloParam, generoParam) {
        this.titulo = tituloParam;
        this.genero = generoParam;
        this._autor = "";
    }
    //GET para el autor
    Cancion.prototype.getAutor = function () {
        return this._autor;
    };
    Object.defineProperty(Cancion.prototype, "autor", {
        //SET para el autor
        set: function (nuevoAutor) {
            if (nuevoAutor == "" || nuevoAutor == null) {
                this._autor = "Anónimo";
            }
            else {
                this._autor = nuevoAutor;
            }
        },
        enumerable: false,
        configurable: true
    });
    //Metodo para mostrar los datos
    Cancion.prototype.datoCancion = function () {
        console.log("Titulo: " + this.titulo);
        console.log("Genero: " + this.genero);
        console.log("Autor: " + this._autor);
    };
    return Cancion;
}());
//Ejemplo de prueba
var cancion = new Cancion("ARRANCAMELO", "pop argentino");
cancion.autor = "WOS";
cancion.datoCancion();
