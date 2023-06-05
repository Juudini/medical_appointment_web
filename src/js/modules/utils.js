//Clases
export class Paciente {
    constructor(dni, apellido, nombre, email, telefono) {
        this.dni = dni;
        this.apellido = apellido;
        this.nombre = nombre;
        this.email = email;
        this.telefono = telefono;
    }
}
export class Eleccion {
    constructor(area, dia, hora, obra) {
        this.area = area;
        this.dia = dia;
        this.hora = hora;
        this.obra = obra;
    }
}
//Objetos >FORM 2<
export const AGENDA_CONSULTAS = [
    {
        area: "DERMATOLOGÍA",
        dia: "Lunes",
        hora: "07:30am",
        hora2: "08:30am",
        hora3: "09:30am",
        hora4: "10:30am",
    },
    {
        area: "CARDIOLOGÍA",
        dia: "Martes",
        hora: "08:50am",
        hora2: "09:50am",
        hora3: "10:50am",
        hora4: "11:50am",
    },
    {
        area: "OFTALMOLOGÍA",
        dia: "Miércoles",
        hora: "11:45am",
        hora2: "15:45pm",
        hora3: "16:45pm",
        hora4: "17:45pm",
    },
    {
        area: "PEDRIATÍA/NEONATOLOGÍA",
        dia: "Jueves",
        hora: "09:20am",
        hora2: "10:20am",
        hora3: "11:20am",
        hora4: "12:20am",
    },
    {
        area: "TRAUMATOLOGÍA",
        dia: "Viernes",
        hora: "08:15am",
        hora2: "09:15am",
        hora3: "10:15am",
        hora4: "11:15am",
    },
];

export const OBRAS_SOCIALES = [
    { nombre: "PARTICULAR" },
    { nombre: "OSDE" },
    { nombre: "OMINT" },
    { nombre: "MEDICUS" },
    { nombre: "AVALIAN" },
    { nombre: "BOREAL" },
    { nombre: "GALENO" },
];
