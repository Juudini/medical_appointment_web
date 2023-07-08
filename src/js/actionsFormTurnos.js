//page~~>AGREGAR TURNOS<~~ ACCIONES de VISUALIZACIÓN
"use strict";

//Modules
import { $getById, $createEl } from "./modules/utils/selectors.js";
import {
    APPOINTMENT_SCHEDULE,
    HEALTH_INSURANCES,
} from "./modules/utils/utils.js";
//Form2 SELECTS
// ~~> MOSTRAR ÁREAS en formulario
let areaSelect = $getById("area");
APPOINTMENT_SCHEDULE.forEach((s) => {
    let option = $createEl("option");
    option.value = s.area;
    option.innerText = s.area;
    areaSelect.append(option);
});

// ~~> MOSTRAR DIA en formulario
let diaSelect = $getById("dia");
APPOINTMENT_SCHEDULE.forEach((d) => {
    let option = $createEl("option");
    option.value = d.dia;
    option.innerText = d.dia;
    diaSelect.append(option);
});

// ~~> MOSTRAR HORA en formulario
let horaSelect = $getById("hora");
APPOINTMENT_SCHEDULE.forEach((h) => {
    let option = $createEl("option");
    option.value = h.hora;
    option.innerText = h.hora;
    horaSelect.append(option);
});

// ~~> MOSTRAR OBRA SOCIAL en formulario
let obraSelect = $getById("obra");
HEALTH_INSURANCES.forEach((obra) => {
    let option = $createEl("option");
    option.value = obra.nombre;
    option.innerText = obra.nombre;
    obraSelect.append(option);
});
// --> fin Form2 SELECTS

// ~~> Actualizar SELECTS al elegir
areaSelect.addEventListener("change", () => {
    // Obtener el servicio seleccionado
    const areaSeleccionada = areaSelect.value;

    // Obtener los días correspondientes al servicio seleccionado
    const diasServicio = APPOINTMENT_SCHEDULE.filter(
        (d) => d.area === areaSeleccionada
    );

    diaSelect.innerHTML = "";

    // Agregar opciones al elemento select días
    diasServicio.forEach((d) => {
        let option = $createEl("option");
        option.value = d.dia;
        option.innerText = d.dia;
        diaSelect.append(option);

        // Al seleccionar el servicio, también se debe actualizar las horas correspondientes al primer día de servicio
        if (d === diasServicio[0]) {
            // Obtener las horas correspondientes al día seleccionado
            const horasDiaCorrespondiente = APPOINTMENT_SCHEDULE.filter(
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
