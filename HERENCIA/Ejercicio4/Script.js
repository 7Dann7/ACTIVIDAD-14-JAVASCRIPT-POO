class Electrodomestico {
    // constructor
    constructor(marca, color, capacidad) {
        this.marca = marca;
        this.color = color;
        this.capacidad= capacidad;
        this.consumo_electrico = parseInt(prompt("Ingrese el consumo electrico:")); // se usa prompt para pedir input
    }

    //metodo publico
    registrar() {
        document.write("<hr>");
        document.write("<div class='alert alert-primary' role='alert'>ELECTRODOMESTICO REGISTRADO </div>");
        document.write("<hr>");
        document.write("Marca: ", this.marca, "<br>");
        document.write("Color: ", this.color, "<br>");
        document.write("Capacidad: ",this.capacidad, "<br>");
        document.write("Cosumo_Electrico: ", this.consumo_electrico, "<br>");
    }

}

class refrigerador extends Electrodomestico {
    // constructor
    constructor(marca, color, capacidad, tipo_refrigerador) {
        super(marca, color, capacidad); // hereda de Vehiculo
        this.tipo_refrigerador= tipo_refrigerador;
        this.temperatura_inicial = parseInt(prompt("Ingrese la temperatura inicial:")); // prompt para pedir input
    }

    encender() {
        document.write("Tipo_refrigerador: ", this.tipo_refrigerador, "<br>"); 
        if (this.temperatura_inicial > 6) {
            document.write("<hr>");
            document.write(`<div class="alert alert-success" role="alert">El refrigerdor de marca ${this.marca}, de color ${this.color} de capacidad ${this.capacidad} y de tipo  ${this.tipo_refrigerador} tiene la temperatura alta, debe ajustar la temperatura !! </div>`);
        } else {
            document.write(`<div class="alert alert-success" role="alert">El refrigerdor de marca ${this.marca}, de color ${this.color} de capacidad ${this.capacidad} tiene la temperatura adecuada !! </div>`);
        }
    }   

}


let objeto_refrigerador = new Electrodomestico('Mabe', 'Gris', '250','500'); 


objeto_refrigerador.registrar(); 
objeto_refrigerador.encender(); 
