// Defino la calase

class Carro {
    //Metodo Constructor
    constructor(color,placa,año){
        this.color = color  // propiedades para la instancia
        this.placa = placa
        this.año = año
    }
//metodo para mostrar detalles del objeto
    mostrarDetalles(){
        document.write("Carro</h3><br>")
        document.write("Color: "+this.color+"<br>")
        document.write("Placa: "+this.placa+"<br>")
        document.write("Año: "+this.año+"<br>")
        document.write("<hr>")
        
    }

    
    
}




//Creacion de objetos por meddio de instanciar la clase celular
let carro1 = new Carro("Azul","3b2-54","2011")
let carro2= new Carro("Negro","34-567","2018")
let carro3= new Carro("Gris","37-214","2022")


carro1.mostrarDetalles()
carro2.mostrarDetalles()
carro3.mostrarDetalles()


