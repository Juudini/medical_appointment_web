//page~~>AGREGAR TURNOS<~~ ACCIONES de VISUALIZACIÓN
"use strict";

//Modules
import { $getById, $createEl } from "./modules/selectors.js";
import { AGENDA_CONSULTAS, OBRAS_SOCIALES } from "./modules/utils.js";
//Form2 SELECTS
// ~~> MOSTRAR ÁREAS en formulario
let areaSelect = $getById("area");
AGENDA_CONSULTAS.forEach((s) => {
    let i = $createEl("option");
    i.value = s.area;
    i.innerText = s.area;
    areaSelect.append(i);
});

// ~~> MOSTRAR DIA en formulario
let diaSelect = $getById("dia");
AGENDA_CONSULTAS.forEach((d) => {
    let i = $createEl("option");
    i.value = d.dia;
    i.innerText = d.dia;
    diaSelect.append(i);
});

// ~~> MOSTRAR HORA en formulario
let horaSelect = $getById("hora");
AGENDA_CONSULTAS.forEach((h) => {
    let i = $createEl("option");
    i.value = h.hora;
    i.innerText = h.hora;
    horaSelect.append(i);
});

// ~~> MOSTRAR OBRA SOCIAL en formulario
let obraSelect = $getById("obra");
OBRAS_SOCIALES.forEach((obra) => {
    let i = $createEl("option");
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
        let i = $createEl("option");
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
                let option = $createEl("option");
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
