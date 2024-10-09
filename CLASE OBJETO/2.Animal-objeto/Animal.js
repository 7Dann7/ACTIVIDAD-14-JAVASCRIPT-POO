// Defino la calase

class Animal {
    //Metodo Constructor
    constructor(nombre,habitat,alimento){
        this.nombre = nombre  // propiedades para la instancia
        this.habitat = habitat
        this.alimento = alimento
    }
//metodo para mostrar detalles del objeto
    mostrarDetalles(){
        document.write("Animal</h3><br>")
        document.write("Nombre: "+this.nombre+"<br>")
        document.write("Habitat: "+this.habitat+"<br>")
        document.write("Alimento: "+this.alimento+"<br>")
        document.write("<hr>")
        
    }

    
    
}




//Creacion de objetos por meddio de instanciar la clase celular
let animal1 = new Animal("Elefante","Selva","Carne")
let animal2 = new Animal("Leon","Selva","Carne" )
let animal3 = new Animal("Delfin","Mar","Peces")


animal1.mostrarDetalles()
animal2.mostrarDetalles()
animal3.mostrarDetalles()


