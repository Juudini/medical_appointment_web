//page~~>Gestionar Turnos<~~ API
"use strict";

const getData = async () => {
    try {
        const res = await fetch("https://apimocha.com/paciente/data");
        if (!res.ok) {
            throw new Error("Error HTTP: " + res.status);
        }
        const data = await res.json();
        return data;
    } catch (error) {
        console.error("Error en la solicitud:", error);
        throw error;
    }
};

export const upToLocalStoragePatients = async () => {
    try {
        const data = await getData();
        let isPacientes = JSON.parse(localStorage.getItem("Patients")) || [];
        localStorage.setItem(
            "Patients",
            JSON.stringify([...data, ...isPacientes])
        );
        console.log("LocalStorage loaded 🐇🐇¡¡Successfully!!🐇🐇 ");
    } catch (error) {
        console.error("Error al obtener los datos", error);
        throw error;
    }
};
