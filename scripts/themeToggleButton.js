//~~> Botón Para darkMode<~~.
const darkMode = () => {
    localStorage.setItem("toggleTheme", JSON.stringify("dark"));
    document.body.classList.add("dark-theme");
};
const lightMode = () => {
    localStorage.setItem("toggleTheme", JSON.stringify("light"));
    document.body.classList.remove("dark-theme");
};
const isDarkTheme = () => {
    const isTheme = JSON.parse(localStorage.getItem("toggleTheme"));
    if (isTheme === "dark") {
        lightMode();
    } else if (isTheme === "light") {
        darkMode();
    } else {
        lightMode();
    }
};
const themeToggleButton = document.getElementById("theme-toggle-button");
themeToggleButton.addEventListener("click", function () {
    isDarkTheme();
});
window.addEventListener("DOMContentLoaded", function () {
    const isTheme = JSON.parse(localStorage.getItem("toggleTheme"));
    if (isTheme === "dark") {
        darkMode();
    } else if (isTheme === "light") {
        lightMode();
    }
});
let keyTheme = localStorage.getItem("toggleTheme");
if (keyTheme == null) {
    lightMode();
    console.log("🙈¡Me quieren sabotear! 🙈");
}
