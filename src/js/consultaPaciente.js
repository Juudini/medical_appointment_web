//page~~>CONSULTAR TURNOS<~~ serch y pintar tabla búsqueda.
"use strict";

//Modules
import { $getById, $createEl } from "./utils/selectors.js";
import { checkUser } from "./modules/checkUser.js";
import { themeMode } from "./modules/themeToggleButton.js";
import { exitBtnEvent } from "./modules/checkUser.js";

//Check user log
checkUser();
//ThemeMode
themeMode();
//Button Exit
exitBtnEvent();
const patientData = JSON.parse(localStorage.getItem("Patients")) || [];
const searchPerLetter = $getById("searchPerLetter");

let arrayPatientData = [];

let firstPatientData = {};

patientData.forEach((patient) => {
    if (patient.length > 0) {
        const firstData = patient[0];
        const dni = firstData.dni;
        const nombre = firstData.nombre;
        const apellido = firstData.apellido;
        const email = firstData.email;
        const telefono = firstData.telefono;

        firstPatientData = { dni, apellido, nombre, email, telefono };
    }

    if (patient.length > 1) {
        const secondData = patient[1];
        const obra = secondData.obra;
        const area = secondData.area;
        const dia = secondData.dia;
        const hora = secondData.hora;

        const patientAllData = {
            ...firstPatientData,
            obra,
            area,
            dia,
            hora,
        };
        arrayPatientData.push(patientAllData);
    }
});

searchPerLetter.addEventListener("input", (e) => {
    const searchValue = e.target.value.toLowerCase();

    if (searchValue.trim() !== "") {
        const results = arrayPatientData.filter((patient) =>
            Object.values(patient).some(
                (value) =>
                    typeof value === "string" &&
                    value.toLowerCase().includes(searchValue)
            )
        );
        // Obtener el elemento de la tabla existente o crear uno nuevo
        let table = $getById("tableRes");
        // Limpiar el contenido del tbody
        let tbody = table.querySelector("tbody");
        if (tbody) {
            tbody.innerHTML = "";
        } else {
            tbody = $createEl("tbody");
            table.appendChild(tbody);
        }

        // Crear las filas de la tabla con data de results
        results.forEach((patient) => {
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
