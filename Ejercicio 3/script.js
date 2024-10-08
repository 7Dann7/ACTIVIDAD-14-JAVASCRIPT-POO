const output = document.getElementById("output");

class Animales{
    constructor( nombre, habitat, alimento ){
        this.nombre = nombre
        this.habitat = habitat
        this.alimento = alimento

    }
    descripcion(){
        output.innerHTML += `Nombre : ${this.nombre}<br>`
        output.innerHTML += `Habitat : ${this.habitat}<br>`
        output.innerHTML += `Color : ${this.alimento}<br><br>`
    }
}

    
class Perro {
    constructor( nombre, habitat, alimento ){
        this.nombre = nombre
        this.habitat = habitat
        this.alimento = alimento
    
        }
        sonido(){
            output.innerHTML += `Nombre : ${this.nombre}<br>`
            output.innerHTML += `Habitat : ${this.habitat}<br>`
            output.innerHTML += `Color : ${this.alimento}<br>`
            output.innerHTML += `El perro hace : GUAUUU!<br><br>`
        }
    }
class Gato {
  
        constructor( nombre, habitat, alimento ){
            this.nombre = nombre
            this.habitat = habitat
            this.alimento = alimento
    
        }
        sonido(){
            output.innerHTML += `Nombre : ${this.nombre}<br>`
            output.innerHTML += `Habitat : ${this.habitat}<br>`
            output.innerHTML += `Color : ${this.alimento}<br>`
            output.innerHTML += `El Gato hace ¡miauuuu!<br><br>`
        }
    }

class Pajaro {
    
        constructor( nombre, habitat, alimento ){
            this.nombre = nombre
            this.habitat = habitat
            this.alimento = alimento
    
        }
        sonido(){
            output.innerHTML += `Nombre : ${this.nombre}<br>`
            output.innerHTML += `Habitat : ${this.habitat}<br>`
            output.innerHTML += `Color : ${this.alimento}<br>`
            output.innerHTML += `El Pajaro hace : cuaaa! <br><br>`
        }
    }
        
function sonido(auuu) {
    auuu.sonido();
}

const objetoPerro = new Perro("toby", "casa", "galletas", 2);
const objetoGato = new Gato("amado", "casa", "pez" );
const objetoPajaro = new Pajaro("lucas", "selva", "granos")


sonido(objetoPerro);
sonido(objetoGato);
sonido(objetoPajaro);

