const output = document.getElementById("output");

class Profesiones{
    constructor( nombre, apellido, cedula ){
        this.nombre = nombre
        this.apellido = apellido
        this.cedula = cedula

    }
    mostrarInfo(){
        output.innerHTML += `Nombre: ${this.nombre}<br>`
        output.innerHTML += `Apellido: ${this.apellido}<br>`
        output.innerHTML += `Cedula: ${this.cedula}<br><br>`
    }
}

    
class Medico {
    constructor( nombre, apellido, cedula ){
        
        this.nombre = nombre
        this.apellido = apellido
        this.cedula = cedula

    }
    descripcion(){
        output.innerHTML += `MEDICO <br>`
        output.innerHTML += `Nombre: ${this.nombre}<br>`
        output.innerHTML += `Apellido: ${this.apellido}<br>`
        output.innerHTML += `Cedula: ${this.cedula}<br><br>`
    }
}
class Ingeniero {
    constructor( nombre, apellido, cedula ){
        this.nombre = nombre
        this.apellido = apellido
        this.cedula = cedula

    }
    descripcion(){
         output.innerHTML += `INGENIERO <br>`
        output.innerHTML += `Nombre: ${this.nombre}<br>`
        output.innerHTML += `Apellido: ${this.apellido}<br>`
        output.innerHTML += `Cedula: ${this.cedula}<br><br>`
    }
}

class Docente {
    constructor( nombre, apellido, cedula ){
        this.nombre = nombre
        this.apellido = apellido
        this.cedula = cedula

    }
    descripcion(){
         output.innerHTML += `DOCENTE <br>`
        output.innerHTML += `Nombre: ${this.nombre}<br>`
        output.innerHTML += `Apellido: ${this.apellido}<br>`
        output.innerHTML += `Cedula: ${this.cedula}<br><br>`
    }
}   

        
function descripcion(persona) {
    persona.descripcion();
}

const objetoMedico = new Medico("andres", "benitez", "3773737373");
const objetoIngeniero = new Ingeniero("carolina", "hernandez", "737387373" );
const objetoDocente = new Docente("alex", "atencio", "838383");


descripcion(objetoMedico);
descripcion(objetoIngeniero);
descripcion(objetoDocente);

