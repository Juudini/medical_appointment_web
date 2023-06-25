//page~~>GESTIONAR TURNOS<~~  MOSTRAR DATOS en tabla.
"use strict";

//Modules
import { $getById, $createEl } from "./modules/selectors.js";
import { checkUser } from "./modules/checkUser.js";
import { upToLocalStoragePatients } from "./modules/requestAPI.js";
import { themeMode } from "./modules/themeToggleButton.js";
import { exitBtnEvent } from "./modules/checkUser.js";
import {
    vaciarTabla,
    showLoading,
    deletePatientAlert,
} from "./modules/alerts.js";

//Check user log
checkUser();
//ThemeMode
themeMode();
// Exit Button
exitBtnEvent();
const tablaDatos = $getById("tablaDatos");

const verDatos = () => {
    const PACIENTES = JSON.parse(localStorage.getItem("Pacientes")) || [];
    tablaDatos.innerHTML = "";

    PACIENTES.forEach((paciente, index) => {
        const [nuevoPaciente, eleccion] = paciente;

        let pacienteFila = $createEl("tr");
        let area = $createEl("td");
        let fecha = $createEl("td");
        let nombre = $createEl("td");
        let obraSocial = $createEl("td");
        let telefono = $createEl("td");
        let eliminar = $createEl("td");
        let btnEliminar = $createEl("button");

        nombre.textContent = `${nuevoPaciente.apellido} ${nuevoPaciente.nombre}`;
        area.textContent = eleccion.area;
        fecha.textContent = `${eleccion.dia}, ${eleccion.hora}`;
        obraSocial.textContent = eleccion.obra;
        telefono.textContent = nuevoPaciente.telefono;

        // Botón Eliminar paciente
        btnEliminar.textContent = "Eliminar";
        btnEliminar.setAttribute("btn-id", index);
        btnEliminar.classList.add("btn", "btn-danger", "btn-sm");
        eliminar.appendChild(btnEliminar);

        //Agregando datos a la fila
        let datos = [area, fecha, nombre, obraSocial, telefono, eliminar];
        for (let dato of datos) {
            pacienteFila.appendChild(dato);
        }
        tablaDatos.appendChild(pacienteFila);

        btnEliminar.addEventListener("click", (e) => {
            const BTN_ID = e.target.getAttribute("btn-id");
            eliminarPaciente(BTN_ID);
        });
    });
};

// Button Alert-Clear Table (individual por paciente)
const eliminarPaciente = (BTN_ID) => {
    Swal.fire({
        title: "¿Estás seguro?",
        text: "No podrás deshacer esta acción!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#716add",
        cancelButtonColor: "#d33",
        background: "#fff url(./../images/trees.png)",
        confirmButtonText: "Si, elimínalo!",
        cancelButtonText: "Cancelar",
    }).then((result) => {
        if (result.isConfirmed) {
            eliminarConfirmado(BTN_ID);
        }
    });
};
const eliminarConfirmado = (BTN_ID) => {
    const pacientes = JSON.parse(localStorage.getItem("Pacientes")) || [];
    pacientes.splice(BTN_ID, 1);
    localStorage.setItem("Pacientes", JSON.stringify(pacientes));
    deletePatientAlert();
    verDatos();
};
//~~> fin Botón eliminar.

// Event Clear Table
const btnVaciarTabla = $getById("btnVaciarTabla");
btnVaciarTabla.addEventListener("click", vaciarTabla);

//Botón Llenar Tabla (Cargar pacientes desde API)
const llenarTabla = $getById("llenarTabla");
llenarTabla.addEventListener("click", uploadPacientes);

function uploadPacientes() {
    let showAlert = showLoading(); // Mostrar el loading y almacenar
    upToLocalStoragePatients().then(() => {
        console.log("🐢🐢¡¡Successful upload to table!!🐢🐢");
        location.reload();
        Swal.close(showAlert);
    });
}
//~~> fin Botón Llenar Tabla.
verDatos();
