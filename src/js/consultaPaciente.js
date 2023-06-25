//page~~>CONSULTAR TURNOS<~~ serch y pintar tabla búsqueda.
"use strict";

//Modules
import { $getById, $createEl } from "./modules/selectors.js";
import { checkUser } from "./modules/checkUser.js";
import { themeMode } from "./modules/themeToggleButton.js";
import { exitBtnEvent } from "./modules/checkUser.js";

//Check user log
checkUser();
//ThemeMode
themeMode();
//Button Exit
exitBtnEvent();
const datosPaciente = JSON.parse(localStorage.getItem("Pacientes")) || [];
const searchPorLetra = $getById("searchPorLetra");

let arrayDataPatient = [];

let pacientePrimerDato = {};

datosPaciente.forEach((paciente) => {
    if (paciente.length > 0) {
        const primerDato = paciente[0];
        const dni = primerDato.dni;
        const nombre = primerDato.nombre;
        const apellido = primerDato.apellido;
        const email = primerDato.email;
        const telefono = primerDato.telefono;

        pacientePrimerDato = { dni, apellido, nombre, email, telefono };
    }

    if (paciente.length > 1) {
        const segundoDato = paciente[1];
        const obra = segundoDato.obra;
        const area = segundoDato.area;
        const dia = segundoDato.dia;
        const hora = segundoDato.hora;

        const patientAllData = {
            ...pacientePrimerDato,
            obra,
            area,
            dia,
            hora,
        };
        arrayDataPatient.push(patientAllData);
    }
});

searchPorLetra.addEventListener("input", (event) => {
    const searchValue = event.target.value.toLowerCase();

    if (searchValue.trim() !== "") {
        const resultados = arrayDataPatient.filter((paciente) =>
            Object.values(paciente).some(
                (value) =>
                    typeof value === "string" &&
                    value.toLowerCase().includes(searchValue)
            )
        );
        // Obtener el elemento de la tabla existente o crear uno nuevo
        let table = $getById("resultadoTabla");
        // Limpiar el contenido del tbody
        let tbody = table.querySelector("tbody");
        if (tbody) {
            tbody.innerHTML = "";
        } else {
            tbody = $createEl("tbody");
            table.appendChild(tbody);
        }

        // Crear las filas de la tabla con datos de resultados
        resultados.forEach((patient) => {
            const fila = $createEl("tr");
            Object.values(patient).forEach((value) => {
                const td = $createEl("td");
                td.textContent = value;
                fila.appendChild(td);
            });
            tbody.appendChild(fila);
        });
    }
});
