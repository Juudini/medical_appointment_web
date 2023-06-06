//page~~>AGREGAR TURNOS<~~ Lógica de formularios
"use strict";

//Modules
import { Paciente, Eleccion } from "./modules/utils.js";
import {
    validateForm,
    validateSelect,
    pedirDNI,
    pedirApellido,
    pedirEmail,
    pedirNombre,
    pedirTelefono,
    eventsInputsForm,
} from "./modules/validation.js";
import { checkUser } from "./modules/checkUser.js";
import { themeMode } from "./modules/themeToggleButton.js";
import { exitBtnEvent } from "./modules/checkUser.js";

//Check user log
checkUser();
//ThemeMode
themeMode();
//Button Exit
exitBtnEvent();

// Esto sería: ARRAY_PACIENTES [];
let ARRAY_PACIENTES = JSON.parse(localStorage.getItem("Pacientes")) || [];

// Definimos en alcance global
export let datosPaciente = {};
let datosEleccion = {};

// ~~~~>Form1
const form = document.getElementById("form1");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!validateForm()) {
        return;
    }
    getDataInputs();
    showForm();
    buttonsGuides();
});

//Eventos inputs form
eventsInputsForm();

const getDataInputs = () => {
    pedirDNI();
    pedirApellido();
    pedirNombre();
    pedirEmail();
    pedirTelefono();
};

const showForm = () => {
    form.style.display = "none";
    form2.style.display = "block";
};
const buttonsGuides = () => {
    const enableTabs = document.getElementById("btn-form1");
    enableTabs.classList.add("active");
};
// --> fin FORM1

// ~~~~>Form2
const form2 = document.getElementById("form2");

form2.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!validateSelect()) {
        return;
    }
    getSelectedData();
    createPatientObject();
    showForm2();
    buttonsGuides2();
});

const getSelectedData = () => {
    const selects = document.querySelectorAll("#form2 select");
    selects.forEach((s) =>
        ["area", "dia", "hora", "obra"].includes(s.id)
            ? (datosEleccion[s.id] = s.value.toUpperCase())
            : null
    );
};

const createPatientObject = () => {
    const yourSelected = new Eleccion(
        datosEleccion.area,
        datosEleccion.dia,
        datosEleccion.hora,
        datosEleccion.obra
    );
    const newPatient = new Paciente(
        datosPaciente.dni,
        datosPaciente.apellido,
        datosPaciente.nombre,
        datosPaciente.email,
        datosPaciente.telefono
    );
    const patientAndSelected = [newPatient, yourSelected];
    ARRAY_PACIENTES.push(patientAndSelected);
};
const showForm2 = () => {
    form2.style.display = "none";
    form3.style.display = "block";
};
const buttonsGuides2 = () => {
    const enableTabs2 = document.getElementById("btn-form2");
    enableTabs2.classList.add("active");
};
// --> fin FORM2

// ~~~~>Form3
const form3 = document.getElementById("form3");

const isSubmit = (e) => {
    e.preventDefault();
    upToLocalStorage();
    msgSuccessToPage();
    showForm3();
    buttonsGuides3();
    form3.removeEventListener("submit", isSubmit);
};
form3.addEventListener("submit", isSubmit);

const upToLocalStorage = () => {
    localStorage.setItem("Pacientes", JSON.stringify(ARRAY_PACIENTES));
};
const msgSuccessToPage = async () => {
    const Toast = Swal.mixin({
        toast: true,
        position: "top-right",
        iconColor: "white",
        customClass: {
            popup: "colored-toast",
        },
        showConfirmButton: false,
        timer: 1800,
        timerProgressBar: true,
    });
    await Toast.fire({
        icon: "success",
        title: "¡Agregado con Éxito!",
    });
};
const showForm3 = () => {
    form2.style.display = "none";
    form3.style.display = "block";
};
const buttonsGuides3 = () => {
    const enableTabs3 = document.getElementById("btn-form3");
    enableTabs3.classList.add("active");
};
// --> fin FORM3

//~~> fix's
ARRAY_PACIENTES === " " ? localStorage.removeItem("Pacientes") : false;
