"use strict";
//~~> Botón Para darkMode<~~
export const themeMode = () => {
    const darkMode = () => {
        localStorage.setItem("modeTheme", JSON.stringify("Dark"));
        document.body.classList.add("dark-theme");
        toggleBtn.classList.remove("bi-toggle-off");
        toggleBtn.classList.add("bi-toggle-on");
    };
    const lightMode = () => {
        localStorage.setItem("modeTheme", JSON.stringify("Light"));
        document.body.classList.remove("dark-theme");
        toggleBtn.classList.remove("bi-toggle-on");
        toggleBtn.classList.add("bi-toggle-off");
    };
    const isDarkTheme = () => {
        const isTheme = JSON.parse(localStorage.getItem("modeTheme"));
        if (isTheme === "Dark") {
            lightMode();
        } else if (isTheme === "Light") {
            darkMode();
        } else {
            lightMode();
        }
    };
    const toggleBtn = document.getElementById("theme-toggle-button");
    toggleBtn.addEventListener("click", function () {
        isDarkTheme();
    });
    window.addEventListener("DOMContentLoaded", function () {
        const isTheme = JSON.parse(localStorage.getItem("modeTheme"));
        if (isTheme === "Dark") {
            darkMode();
        } else if (isTheme === "Light") {
            lightMode();
        }
    });
    let keyTheme = localStorage.getItem("modeTheme");
    if (keyTheme == null) {
        lightMode();
        console.log("🙈¡Me quieren sabotear! 🙈");
    }
};
