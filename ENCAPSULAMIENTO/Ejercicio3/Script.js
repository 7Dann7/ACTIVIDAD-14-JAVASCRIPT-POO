
// Clase Personas con atributos privados
class Libro {
    // método constructor
    constructor (titulo, autor, isbn, editorial) {
         this._titulo = titulo; // privado (convención en JS usando _)
         this._autor= autor; // privado
         this._isbn = isbn; // público
         this.editorial = editorial; // público
    
        }
        
        obtenerTitulo() {
            return this._titulo;
        }
        obtenerAutor() {
            return this._autor;
        }

        obtenerIsbn() {
            return this._isbn

        }
        
    
        // método setter para nombres
        establecerTitulo (nuevoTitulo) {
        this._titulo =(nuevoTitulo)}
    
        // método setter para apellidos
        establecerAutor (nuevoAutor) {
        this._autor =(nuevoAutor)}

        establecerIsbn  (nuevoIsbn){
        this._isbn = (nuevoIsbn)}
    
        
    // método para mostrar detalles del objeto
      mostrarDetalles() {
        document.write(`\nTitulo: ${this._titulo}<br>`);
        document.write(`Autor: ${this._autor}<br>`);
        document.write(`Isbn: ${this._isbn}<br>`);
        document.write(`Editorial: ${this.editorial}<br>`);
        
      }
    }
    // objeto
    const libro= new Libro ("El elefante", "jose", 7070700707, "Arbusto");
    // imprimir atributos públicos y privados
    libro.mostrarDetalles();
    
    document.write("<hr>");
    // modificar atributos encapsulados usando setters y obtenerlos con getters persona.establecerNombres("Carlos"); // setter
    
    
    // modificar atributos encapsulados usando setters y obtenerlos con getters persona.establecerNombres
    libro.establecerNombre("El leopardo"); // setter
    document.write(`Nombre: ${libro.obtenerNombre()} <br>`); // getter
    libro.establecerAutor("Sebastian"); // setter
    document.write(`Autor: ${libro.obtenerAutor()} <br>`);
    libro.establecerIsbn("4858696"); // setter
    document.write(`Isbn: ${libro.obtenerIsbn()} <br>`);  // getter 
    document.write(`Editorial: ${libro.editorial} <br>`); // público
    
    