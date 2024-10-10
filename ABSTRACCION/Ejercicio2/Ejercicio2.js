class Empleado {
    calcularSalario() {
        throw new Error("El método calcularSalario() debe ser implementado");
    }
}

class EmpleadoTiempoCompleto extends Empleado {
    constructor(horas) {
        super();
        this.horas = horas;
    }

    calcularSalario() {
        return this.horas * 50000;
    }
}

class EmpleadoPorHoras extends Empleado {
    constructor(horas) {
        super();
        this.horas = horas;
    }

    calcularSalario() {
        return this.horas * 20000;
    }
}

const empleadoTiempoCompleto = new EmpleadoTiempoCompleto(24);
document.write(`si un empleado trabajo 50000 pesos por hora por 24 horas su salario es de : ${empleadoTiempoCompleto.calcularSalario()}<br><br>`);

const empleadoPorHoras = new EmpleadoPorHoras(3);
document.write(`si un empleado trabajo 20000 pesos por 5 su salario es de :  ${empleadoPorHoras.calcularSalario()}`);