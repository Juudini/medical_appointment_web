// page~~>LOGIN<~~ Esto pertenece a la Page INDEX.html

const USER = { user: "admin", password: "admin" };
const btnLogin = document.getElementById("btnLogin");
btnLogin.addEventListener("click", login);

function login(e) {
    e.preventDefault();
    const user = document.getElementById("user").value;
    const passw = document.getElementById("password").value;
    // Verifica las credenciales del usuario
    if (user === USER.user && passw === USER.password) {
        localStorage.setItem("UserLog", JSON.stringify("1"));
        document.getElementById("login-form").style.display = "none";
        document.getElementById("main-content").style.display = "block";
    } else {
        password.classList.add("input-error");
        console.log("Lo siento, las credenciales no son válidas");
    }
}

// Background Granim
let granimInstance = new Granim({
    element: "#canvas-basic",
    direction: "left-right",
    isPausedWhenNotInView: true,
    states: {
        "default-state": {
            gradients: [
                ["#FDFEFE", "#FDFEFE"],
                ["#CACACA", "#D7BDE2"],
                ["#BB8FCE", "#2874A6"],
            ],
        },
    },
});
