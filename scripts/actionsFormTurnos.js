//page~~>AGREGAR TURNOS<~~ ACCIONES de VISUALIZACIÓN FORMULARIOS
const AGENDA_CONSULTAS = [
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

const OBRAS_SOCIALES = [
    { nombre: "PARTICULAR" },
    { nombre: "OSDE" },
    { nombre: "OMINT" },
    { nombre: "MEDICUS" },
    { nombre: "AVALIAN" },
    { nombre: "BOREAL" },
    { nombre: "GALENO" },
];

//Form2 SELECTS
// ~~> MOSTRAR ÁREAS en formulario
let areaSelect = document.getElementById("area");
AGENDA_CONSULTAS.forEach((s) => {
    let i = document.createElement("option");
    i.value = s.area;
    i.innerText = s.area;
    areaSelect.append(i);
});

// ~~> MOSTRAR DIA en formulario
let diaSelect = document.getElementById("dia");
AGENDA_CONSULTAS.forEach((d) => {
    let i = document.createElement("option");
    i.value = d.dia;
    i.innerText = d.dia;
    diaSelect.append(i);
});

// ~~> MOSTRAR HORA en formulario
let horaSelect = document.getElementById("hora");
AGENDA_CONSULTAS.forEach((h) => {
    let i = document.createElement("option");
    i.value = h.hora;
    i.innerText = h.hora;
    horaSelect.append(i);
});

// ~~> MOSTRAR OBRA SOCIAL en formulario
let obraSelect = document.getElementById("obra");
OBRAS_SOCIALES.forEach((obra) => {
    let i = document.createElement("option");
    i.value = obra.nombre;
    i.innerText = obra.nombre;
    obraSelect.append(i);
});
// --> fin Form2 SELECTS

// ~~> Actualizar SELECTS al elegir
areaSelect.addEventListener("change", () => {
    // Obtener el servicio seleccionado
    const areaSeleccionada = areaSelect.value;

    // Obtener los días correspondientes al servicio seleccionado
    const diasServicio = AGENDA_CONSULTAS.filter(
        (d) => d.area === areaSeleccionada
    );

    diaSelect.innerHTML = "";

    // Agregar opciones al elemento select días
    diasServicio.forEach((d) => {
        let i = document.createElement("option");
        i.value = d.dia;
        i.innerText = d.dia;
        diaSelect.append(i);

        // Al seleccionar el servicio, también se debe actualizar las horas correspondientes al primer día de servicio
        if (d === diasServicio[0]) {
            // Obtener las horas correspondientes al día seleccionado
            const horasDiaCorrespondiente = AGENDA_CONSULTAS.filter(
                (h) => h.dia === d.dia
            );

            horaSelect.innerHTML = "";

            // Agregar opciones al elemento select de las horas
            horasDiaCorrespondiente.forEach((h) => {
                let option = document.createElement("option");
                option.value = h.hora;
                option.innerText = h.hora;
                horaSelect.append(option);

                // Si hay una hora adicional, agregarla también
                h.hora2 && horaSelect.append(new Option(h.hora2, h.hora2));
                h.hora3 && horaSelect.append(new Option(h.hora3, h.hora3));
                h.hora4 && horaSelect.append(new Option(h.hora4, h.hora4));
            });
        }
    });
});
// --> fin Actualizar SELECTS

// ~~>HABILITAR Manejo navBar FORM
const startForm = (e) => {
    // Oculta todos los formularios
    let ocultarForm = document.querySelectorAll(".formContent");
    ocultarForm.forEach((form) => (form.style.display = "none"));

    // Deshabilita los botones de navegación del FORM
    let deshabilitar = document.querySelectorAll(".btnTab");
    deshabilitar.forEach((btn) => btn.classList.remove("active"));

    // Muestra el formulario correspondiente
    let form = e.currentTarget.getAttribute("data-target");
    let mostrarForm = document.getElementById(form);
    mostrarForm.style.display = "block";

    // Agrega la clase "active" al botón actual
    e.currentTarget.classList.add("active");
};
// --> fin navBar FORM
