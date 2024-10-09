const output = document.getElementById("output");

class Aprendiz{
    constructor( nombres, apellidos, cedula, sexo){
        this.nombres = nombres
        this.apellidos = apellidos
        this.cedula = cedula
        this.sexo = sexo
        this.formacion = prompt("Programa de formacion: " )
        this.regional = prompt("Regional: ")
    }
    mostrarInfo(){
        output.innerHTML += "Hola, soy un aaprendiz SENA <br>";
        output.innerHTML += `${this.nombres} ${this.apellidos}<br>`
        output.innerHTML += `${this.cedula}<br>`
        output.innerHTML += `${this.sexo}<br> `
        output.innerHTML += `Estudiante del programa: ${this.formacion} de la regional ${this.regional}<br><br>`
    }
}

    
class Instructor{
   constructor( nombres, apellidos, cedula, area){
                this.nombres = nombres
                this.apellidos = apellidos
                this.cedula = cedula
                this.area = area
                
            }
         mostrarInfo(){
                output.innerHTML += "Hola, soy un instructor SENA <br>";
                output.innerHTML += `${this.nombres} ${this.apellidos}<br>`
                output.innerHTML += `${this.cedula}<br>`
                output.innerHTML += `${this.sexo}<br> `
                 output.innerHTML += `Area de instruccion: ${this.formacion} <br><br>`
            }
    }

         class Coordinador{
            constructor( nombres, apellidos, cedula, departamento){
                    this.nombres = nombres
                    this.apellidos = apellidos
                    this.cedula = cedula
                    this.departamento = departamento
                    
                }
            mostrarInfo(){
                output.innerHTML +=
                    output.innerHTML += "Hola, soy un coordinador del SENA <br>";
                    output.innerHTML += `${this.nombres} ${this.apellidos}<br>`
                    output.innerHTML += `${this.cedula}<br>`
                    output.innerHTML += `Departamento :${this.departamento} <br><br>`
                 
                }
                }
        
function mostrarInformacion(persona) {
    persona.mostrarInfo();
}

const objetoAprendiz = new Aprendiz("Samuel Elias", "Vega barrios", 1242424425, "Masculino");
const objetoInstructor = new Instructor("Laura", "Rodriguez", 89083997383, "programacion");
const objetoCoordinador = new Coordinador("Carlos", "Martinez", 393279237293, "Recursos Humanos");

mostrarInformacion(objetoAprendiz);
mostrarInformacion(objetoInstructor);
mostrarInformacion(objetoCoordinador);

