
// Clase Personas con atributos privados
class Producto {
    // método constructor
    constructor (nombre, precio, cantidad, categoria) {
         this._nombre = nombre; // privado (convención en JS usando _)
         this._precio= precio; // privado
         this.cantidad =cantidad; // público
         this.categoria = categoria; // público
    
        }
        
        obtenerNombre() {
            return this._nombre;
        }
        obtenerPrecio() {
            return this._precio;
        }
        
    
        // método setter para nombres
        establecerNombre (nuevoNombre) {
        this._nombre =(nuevoNombre)}
    
        // método setter para apellidos
        establecerPrecio (nuevoPrecio) {
        this._precio =(nuevoPrecio);
    
        }
    // método para mostrar detalles del objeto
      mostrarDetalles() {
        document.write(`\nNombre: ${this._nombre}<br>`);
        document.write(`Precio: ${this._precio}<br>`);
        document.write(`Cantidad: ${this.cantidad}<br>`);
        document.write(`Categoria: ${this.categoria}<br>`);
        
      }
    }
    // objeto
    const produto = new Producto ("Clorox", "7000", 4, "Limpieza");
    // imprimir atributos públicos y privados
    produto.mostrarDetalles();
    
    document.write("<hr>");
    // modificar atributos encapsulados usando setters y obtenerlos con getters persona.establecerNombres("Carlos"); // setter
    
    
    // modificar atributos encapsulados usando setters y obtenerlos con getters persona.establecerNombres
    produto.establecerNombre("Suavitel"); // setter
    document.write(`Nombre: ${produto.obtenerNombre()} <br>`); // getter
    produto.establecerPrecio ("9000 "); // setter
    document.write(`Precio: ${produto.obtenerPrecio()} <br>`); // getter 
    document.write(`Cantidad: ${produto.cantidad} <br>`); // público
    document.write(`Categoria: ${produto.categoria} <br>`); // público
    
    