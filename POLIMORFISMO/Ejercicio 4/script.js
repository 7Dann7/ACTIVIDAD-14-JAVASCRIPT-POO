const output = document.getElementById("output");

class InstrumentosMusicales{
    constructor( marca, placa, color ){
        this.marca = marca
        this.placa = placa
        this.color = color

    }
    mostrarInfo(){
        output.innerHTML += `Marca: ${this.marca}<br>`
        output.innerHTML += `Placa: ${this.placa}<br>`
        output.innerHTML += `Color: ${this.color}<br><br>`
    }
}

    
class Guitarra {
    constructor( marca, placa, color ){
        this.marca = marca
        this.placa = placa
        this.color = color

    }
    descripcion(){
        output.innerHTML += `Marca: ${this.marca}<br>`
        output.innerHTML += `Placa: ${this.placa}<br>`
        output.innerHTML += `Color: ${this.color}<br><br>`
    }
}

class Piano {
    constructor( marca, placa, color ){
        this.marca = marca
        this.placa = placa
        this.color = color

    }
    descripcion(){
        output.innerHTML += `Marca: ${this.marca}<br>`
        output.innerHTML += `Placa: ${this.placa}<br>`
        output.innerHTML += `Color: ${this.color}<br><br>`
    }
}

class Trompeta {
    constructor( marca, placa, color ){
        this.marca = marca
        this.placa = placa
        this.color = color

    }
    descripcion(){
        output.innerHTML += `Marca: ${this.marca}<br>`
        output.innerHTML += `Placa: ${this.placa}<br>`
        output.innerHTML += `Color: ${this.color}<br><br>`
    }
}
        
function descripcion(autoo) {
    autoo.descripcion();
}

const objetoGuitarra = new Guitarra("Fender", "dess", "Azul");
const objetoPiano = new Piano("TATT","ABEL", "Verde" );
const objetoTrompeta = new Trompeta("CLEFF", "SUSS", "Naranja")


descripcion(objetoGuitarra);
descripcion(objetoPiano);
descripcion(objetoTrompeta);

