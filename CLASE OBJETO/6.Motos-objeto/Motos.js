// Defino la calase

class Motos {
    //Metodo Constructor
    constructor(color,placa,año){
        this.color = color  // propiedades para la instancia
        this.placa = placa
        this.año = año
        
    }
//metodo para mostrar detalles del objeto
    mostrarDetalles(){
        document.write("Moto</h3><br>")
        document.write("color: "+this.color+"<br>")
        document.write("placa: "+this.placa+"<br>")
        document.write("Año: "+this.año+"<br>")
        document.write("<hr>")
        
    }

    
    
}




//Creacion de objetos por meddio de instanciar la clase celular
let moto1 = new Motos("Blanco","312-4A","2007")
let moto2 = new Motos("Negro","AFT-H2","2023" )
let moto3 = new Motos("Verde","HWX-YZ","2022")


moto1.mostrarDetalles()
moto2.mostrarDetalles()
moto3.mostrarDetalles()


