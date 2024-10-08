const output = document.getElementById("output");

class Vehiculo{
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

    
class Carro {
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

class Moto {
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

class Bicicleta {
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

const objetoCarro = new Carro("Ford", "647b6", "Azul" );
const objetoMoto = new Moto("Suzuki", "733h3", "Verde" );
const objetoBicicleta = new Bicicleta("Avanti", "hdjsn3", "Naranja")


descripcion(objetoCarro);
descripcion(objetoMoto);
descripcion(objetoBicicleta);

