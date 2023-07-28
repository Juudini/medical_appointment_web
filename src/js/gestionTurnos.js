//page~~>GESTIONAR TURNOS<~~  MOSTRAR DATOS en tabla.
"use strict";

//Modules
import { $getById, $createEl } from "./utils/selectors.js";
import { checkUser } from "./modules/checkUser.js";
import { upToLocalStoragePatients } from "./modules/requestAPI.js";
import { themeMode } from "./modules/themeToggleButton.js";
import { exitBtnEvent } from "./modules/checkUser.js";
import { clearTable, showLoading, deletePatientAlert } from "./utils/alerts.js";

//Check user log
checkUser();
//ThemeMode
themeMode();
// Exit Button
exitBtnEvent();
const dataTable = $getById("dataTable");

const viewData = () => {
    const PATIENTS = JSON.parse(localStorage.getItem("Patients")) || [];
    dataTable.innerHTML = "";

    PATIENTS.forEach((patient, index) => {
        const [newPatient, selected] = patient;

        let patientRow = $createEl("tr");
        let area = $createEl("td");
        let fecha = $createEl("td");
        let nombre = $createEl("td");
        let email = $createEl("td");
        let telefono = $createEl("td");
        let eliminar = $createEl("td");
        let btnDelete = $createEl("button");

        nombre.textContent = `${newPatient.apellido} ${newPatient.nombre}`;
        area.textContent = selected.area;
        fecha.textContent = `${selected.dia}, ${selected.hora}`;
        email.textContent = newPatient.email;
        telefono.textContent = newPatient.telefono;

        // Botón Eliminar patient
        btnDelete.textContent = "Eliminar";
        btnDelete.setAttribute("btn-id", index);
        btnDelete.classList.add("btn", "btn-danger", "btn-sm");
        eliminar.appendChild(btnDelete);

        //Agregando data a la fila
        let data = [area, fecha, nombre, email, telefono, eliminar];
        for (let element of data) {
            patientRow.appendChild(element);
        }
        dataTable.appendChild(patientRow);

        btnDelete.addEventListener("click", (e) => {
            const BTN_ID = e.target.getAttribute("btn-id");
            eliminarPaciente(BTN_ID);
        });
    });
};

// Button Alert-Clear Table (individual por patient)
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
    const pacientes = JSON.parse(localStorage.getItem("Patients")) || [];
    pacientes.splice(BTN_ID, 1);
    localStorage.setItem("Patients", JSON.stringify(pacientes));
    deletePatientAlert();
    viewData();
};
//~~> fin Clear Button.

// Event Clear Table
const btnVaciarTabla = $getById("btnVaciarTabla");
btnVaciarTabla.addEventListener("click", clearTable);

//Botón Llenar Tabla (Cargar pacientes desde API)
const fillTable = $getById("fillTable");
fillTable.addEventListener("click", uploadPatients);

function uploadPatients() {
    let showAlert = showLoading(); // Mostrar el loading y almacenar
    upToLocalStoragePatients().then(() => {
        console.log("🐢🐢¡¡Successful upload to table!!🐢🐢");
        location.reload();
        Swal.close(showAlert);
    });
}
//~~> fin Botón Llenar Tabla.
viewData();
