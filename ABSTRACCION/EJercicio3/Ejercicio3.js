class TareaEmpleado {
    realizarTarea() {
        throw new Error("El método realizarTarea() debe ser implementado");
    }
}

class Ingeniero extends TareaEmpleado {
    constructor(empresa) {
        super();
        this.empresa = empresa;
    }

    realizarTarea() {
        return this.empresa;
    }
}

class Doctor extends TareaEmpleado {
    constructor(hospital) {
        super();
        this.hospital = hospital;
    }

    realizarTarea() {
        return this.hospital;
    }
}

const ingeniero = new Ingeniero("Empresa");
document.write(`El Ingeniero realiza su tarea en una: ${ingeniero.realizarTarea()}<br><br>`);

const doctor = new Doctor("hospital");
document.write(`El Doctor realiza su tarea en un: ${doctor.realizarTarea()}`);
