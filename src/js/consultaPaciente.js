//page~~>CONSULTAR TURNOS<~~ serch y pintar tabla búsqueda.
"use strict";

//Modules
import { checkUser } from "./modules/checkUser.js";
import { themeMode } from "./modules/themeToggleButton.js";

//Check user log
checkUser();
//ThemeMode
themeMode();

const datosPaciente = JSON.parse(localStorage.getItem("Pacientes")) || [];
const searchPorLetra = document.getElementById("searchPorLetra");

let recuperados = [];

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

        const pacienteCompleto = {
            ...pacientePrimerDato,
            obra,
            area,
            dia,
            hora,
        };
        recuperados.push(pacienteCompleto);
    }
});

searchPorLetra.addEventListener("input", (event) => {
    const valorBusqueda = event.target.value.toLowerCase();

    if (valorBusqueda.trim() !== "") {
        const resultados = recuperados.filter((paciente) =>
            Object.values(paciente).some(
                (value) =>
                    typeof value === "string" &&
                    value.toLowerCase().includes(valorBusqueda)
            )
        );
        // Obtener el elemento de la tabla existente o crear uno nuevo
        let table = document.getElementById("resultadoTabla");
        // Limpiar el contenido del tbody
        let tbody = table.querySelector("tbody");
        if (tbody) {
            tbody.innerHTML = "";
        } else {
            tbody = document.createElement("tbody");
            table.appendChild(tbody);
        }

        // Crear las filas de la tabla con datos de resultados
        resultados.forEach((paciente) => {
            const fila = document.createElement("tr");
            Object.values(paciente).forEach((value) => {
                const td = document.createElement("td");
                td.textContent = value;
                fila.appendChild(td);
            });
            tbody.appendChild(fila);
        });
    }
});
