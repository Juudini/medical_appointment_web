//~~> Botón Para darkMode<~~.
const darkMode = () => {
    localStorage.setItem("themeMode", JSON.stringify("Dark"));
    document.body.classList.add("dark-theme");
};
const lightMode = () => {
    localStorage.setItem("themeMode", JSON.stringify("Light"));
    document.body.classList.remove("dark-theme");
};

const isTheme = JSON.parse(localStorage.getItem("themeMode"));

const isDarkTheme = () => {
    if (isTheme === "Dark") {
        lightMode();
    } else if (isTheme === "Light") {
        darkMode();
    } else {
        lightMode();
    }
};
const themeToggleButton = document.getElementById("theme-toggle-button");
themeToggleButton.addEventListener("click", () => {
    isDarkTheme();
});
window.addEventListener("DOMContentLoaded", () => {
    if (isTheme === "Dark") {
        darkMode();
    } else if (isTheme === "Light") {
        lightMode();
    }
});
let keyTheme = localStorage.getItem("themeMode");
if (keyTheme == null) {
    lightMode();
    console.log("🙈¡Me quieren sabotear! 🙈");
}
