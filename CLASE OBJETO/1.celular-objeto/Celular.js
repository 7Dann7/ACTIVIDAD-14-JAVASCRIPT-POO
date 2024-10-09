// Defino la calase

class Celular{
    //Metodo Constructor
    constructor(modelo,marca,bateria,camara,tamaño){
        this.modelo = modelo  // propiedades para la instancia
        this.marca = marca
        this.bateria = bateria
        this.camara = camara
        this.tamaño = tamaño

    }
//metodo para mostrar detalles del objeto
    mostrarDetalles(){
        document.write("Dispositivo Movil</h3><br>")
        document.write("Modelo: "+this.modelo+"<br>")
        document.write("Marca: "+this.marca+"<br>")
        document.write("Bateria: "+this.bateria+"<br>")
        document.write("Camara: "+this.camara+"<br>")
        document.write("Tamaño: "+this.tamaño+"<br>")
        document.write("<hr>")
        
    }

    encender() {  
        let energia = parseInt(prompt("Digite el valor de la carga: "));
    
        if (energia > 0) {
            document.write("El celular : "+ this.modelo + " se puede encender <br>");
            document.write(`IIIIII $ {energia} % de carga <br>`);
            document.write("<h3>");
    
        } else{
            document.write("El celular " + this.modelo + " no se puede encender <br>" );
            document.write(`IIIIII $ {energia} % de carga <br>`);
            document.write("<h3>");
    
        }
            
    }
}




//Creacion de objetos por meddio de instanciar la clase celular
let celular1 = new Celular("Iphone 13 pro","Iphone","3095 mAh","12 MP","6.06")
let celular2 = new Celular("Galaxy A25","Samsumg","5000 mAh","13 MP" )


celular1.mostrarDetalles()
celular2.mostrarDetalles()
celular1.encender()

