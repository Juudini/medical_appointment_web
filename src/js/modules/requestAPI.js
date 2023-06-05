//page~~>Gestionar Turnos<~~ API
"use strict";

const getData = async () => {
    try {
        let res = await fetch("https://apimocha.com/paciente/data");
        let data = await res.json();
        console.log("Response:", res.ok);
        return data;
    } catch (error) {
        console.error("alamadree:", error);
    }
};

export const upToLocalStoragePacientes = async () => {
    try {
        const data = await getData();
        const isPacientes = JSON.parse(localStorage.getItem("Pacientes")) || [];
        localStorage.setItem(
            "Pacientes",
            JSON.stringify([...data, ...isPacientes])
        );
        console.log("LocalStorage loaded 🐇🐇¡¡Successfully!!🐇🐇 ");
    } catch (error) {
        console.error("Error al obtener los datos", error);
    }
};
