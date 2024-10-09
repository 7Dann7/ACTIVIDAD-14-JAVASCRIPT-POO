// Defino la calase

class Figuras {
    //Metodo Constructor
    constructor(largo,ancho,aristas){
        this.largo = largo  // propiedades para la instancia
        this.ancho = ancho
        this.aristas = aristas
        
    }
//metodo para mostrar detalles del objeto
    mostrarDetalles(){
        document.write("Figura</h3><br>")
        document.write("Largo: "+this.largo+"<br>")
        document.write("Ancho: "+this.ancho+"<br>")
        document.write("Aristas: "+this.aristas+"<br>")
        document.write("<hr>")
        
    }

    
    
}




//Creacion de objetos por meddio de instanciar la clase celular
let figura1 = new Figuras("23 cm","10 cm","40")
let figura2 = new Figuras("30 cm","25 cm","35" )
let figura3 = new Figuras("22 cm","40 cm", "0")


figura1.mostrarDetalles()
figura2.mostrarDetalles()
figura3.mostrarDetalles()


