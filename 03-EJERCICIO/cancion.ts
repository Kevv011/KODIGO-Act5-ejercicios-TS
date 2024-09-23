//Clase cancion
class Cancion {
    //Atributos
    public titulo: string;
    public genero: string;
    private _autor: string; //Atributo privado

    //Constructor
    constructor(tituloParam: string, generoParam: string) {
        this.titulo = tituloParam;
        this.genero = generoParam;
        this._autor = "";
    }

    //GET para el autor
    getAutor(): string {
        return this._autor;
    }

    //SET para el autor
    set autor(nuevoAutor: string) {
        if (nuevoAutor == "" || nuevoAutor == null) {
            this._autor = "Anónimo";
        } else {
            this._autor = nuevoAutor;
        }
    }

    //Metodo para mostrar los datos
    datoCancion(): void {
        console.log("Titulo: " + this.titulo);
        console.log("Genero: " + this.genero);
        console.log("Autor: " + this._autor);
    }
}

//Ejemplo de prueba
let cancion = new Cancion("ARRANCAMELO", "pop argentino");
cancion.autor = "WOS";
cancion.datoCancion();