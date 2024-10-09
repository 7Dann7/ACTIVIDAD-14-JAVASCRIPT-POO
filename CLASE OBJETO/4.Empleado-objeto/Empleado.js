// Defino la calase

class Empleado {
    //Metodo Constructor
    constructor(nombre,edad,genero,numero_telefono,altura){
        this.nombre = nombre  // propiedades para la instancia
        this.edad = edad
        this.genero = genero
        this.numero_telefono = numero_telefono
        this.altura = altura
    }
//metodo para mostrar detalles del objeto
    mostrarDetalles(){
        document.write("Empleado</h3><br>")
        document.write("Nombre: "+this.nombre+"<br>")
        document.write("Edad: "+this.edad+"<br>")
        document.write("Genero: "+this.genero+"<br>")
        document.write("Numero_telefono: "+this.numero_telefono+"<br>")
        document.write("Altura: "+this.altura+"<br>")
        document.write("<hr>")
        
    }

    
    
}




//Creacion de objetos por meddio de instanciar la clase celular
let empleado1 = new Empleado("David","33","Masculino","314 2457321","1.83")
let empleado2= new Empleado("Estefany","24","Fememino","301 4763210","1.80" )
let empleado3= new Empleado("Fabian","26","Masculino","310 2457321","1.80")


empleado1.mostrarDetalles()
empleado2.mostrarDetalles()
empleado3.mostrarDetalles()


