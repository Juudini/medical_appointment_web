// page ~~>AGREGAR TURNOS<~~ form's validations
"use strict";
//Modules
import { $getById } from "./selectors.js";
import { patientData } from "./../agregarTurnos.js";

//>INICIO DE FUNCIONES DE VALIDACIÓN<
//>DNI<
export const pedirDNI = () => {
    let dniIngresado = $getById("inputDNI").value;
    // Almacena el valor a la propiedad "dni" en patientData{}
    patientData.dni = dniIngresado;
    if (
        dniIngresado.length !== 8 ||
        !/^\d{8}$/.test(dniIngresado) ||
        dniIngresado === ""
    ) {
        inputDNI.style.border = "2px solid red";
        return false;
    } else {
        inputDNI.style.border = "";
    }
    return dniIngresado;
};
// --->fin DNI<---

//>Apellido<
export const pedirApellido = () => {
    let apellidoIngresado = $getById("inputApellido").value;
    // Almacena el valor a la propiedad "apellido" en patientData{}.
    patientData.apellido = apellidoIngresado.toUpperCase();
    if (
        apellidoIngresado === "" ||
        apellidoIngresado === null ||
        !/^[a-zA-Z\s]*$/.test(apellidoIngresado) ||
        apellidoIngresado.length < 3 ||
        apellidoIngresado.length > 15
    ) {
        inputApellido.style.border = "2px solid red";
        return false;
    } else {
        inputApellido.style.border = "";
    }
    return apellidoIngresado;
};
// --->fin Apellido<---

//>Nombre<
export const pedirNombre = () => {
    let nombreIngresado = $getById("inputNombre").value;
    // Almacena el valor a la propiedad "nombre" en patientData{}.
    patientData.nombre = nombreIngresado.toUpperCase();
    if (
        nombreIngresado === "" ||
        nombreIngresado === null ||
        !/^[a-zA-Z\s]*$/.test(nombreIngresado) ||
        nombreIngresado.length < 3 ||
        nombreIngresado.length > 15
    ) {
        inputNombre.style.border = "2px solid red";
        return false;
    } else {
        inputNombre.style.border = "";
    }
    return nombreIngresado;
};
// --->fin Nombre<---

//>E-mail<
export const pedirEmail = () => {
    let emailIngresado = $getById("inputEmail").value;
    // Almacena el valor a la propiedad "email" en patientData{}.
    patientData.email = emailIngresado.toLowerCase();
    if (
        emailIngresado === "" ||
        emailIngresado === null ||
        !emailIngresado.includes("@") ||
        !emailIngresado.endsWith(".com") ||
        /[^a-zA-Z0-9@._-]/.test(emailIngresado)
    ) {
        inputEmail.style.border = "2px solid red";
        return false;
    } else {
        inputEmail.style.border = "";
    }
    return emailIngresado;
};
// --->fin E-mail<---

//>Teléfono<
export const pedirTelefono = () => {
    let telefonoIngresado = $getById("inputTelefono").value;
    // Almacena el valor a la propiedad "telefono" en patientData{}
    patientData.telefono = telefonoIngresado;
    if (
        telefonoIngresado === "" ||
        telefonoIngresado === null ||
        telefonoIngresado.length < 8 ||
        telefonoIngresado.length > 15 ||
        !/^\d+$/.test(telefonoIngresado)
    ) {
        inputTelefono.style.border = "2px solid red";
        return false;
    } else {
        inputTelefono.style.border = "";
    }
    return telefonoIngresado;
};
// --->fin Teléfono<---

// Eventos >INPUTS< Formularios.
export const eventsInputsForm = () => {
    inputDNI.addEventListener("blur", pedirDNI);
    inputApellido.addEventListener("blur", pedirApellido);
    inputNombre.addEventListener("blur", pedirNombre);
    inputEmail.addEventListener("blur", pedirEmail);
    inputTelefono.addEventListener("blur", pedirTelefono);
};

export const validateForm = () => {
    // Validación de los campos individualmente
    const isDNIValido = pedirDNI();
    const isApellidoValido = pedirApellido();
    const isNombreValido = pedirNombre();
    const isEmailValido = pedirEmail();
    const isTelefonoValido = pedirTelefono();

    // Verificar los campos si son válidos
    if (
        isDNIValido &&
        isApellidoValido &&
        isNombreValido &&
        isEmailValido &&
        isTelefonoValido
    ) {
        return true;
    } else {
        Swal.fire({
            icon: "error",
            title: "Error de validación",
            text: "Por favor, verifica los datos ingresados.",
        });
        return false;
    }
};

// >SELECTS<
export const validateSelect = () => {
    const selects = document.querySelectorAll("#form2 select");
    let areSelected = true;
    selects.forEach((select) => {
        const selectedValue = select.value;
        if (selectedValue === "") {
            Swal.fire({
                icon: "error",
                title: "Error de validación",
                text: "Debes seleccionar una opción",
            });
            areSelected = false;
        }
    });
    return areSelected;
};
// --->fin SELECTS<---
