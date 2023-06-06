// page~~>LOGIN<~~ Esto pertenece a la Page INDEX.html
"use strict";

const USER = { user: "admin", password: "admin" };
const btnLogin = document.getElementById("btnLogin");
btnLogin.addEventListener("click", login);

function login(e) {
    e.preventDefault();
    let user = document.getElementById("user").value;
    let passw = document.getElementById("password").value;

    // Verifica las credenciales del usuario
    if (user === USER.user && passw === USER.password) {
        localStorage.setItem("UserLog", JSON.stringify("1"));

        //Disabled button
        btnLogin.setAttribute("disabled", "true");

        //Alert
        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
        });
        Toast.fire({
            icon: "success",
            title: "Signed in successfully",
        }).then(() => {
            //Actions show page
            document.getElementById("login-form").style.display = "none";
            document.getElementById("main-content").style.display = "block";
        });
    } else {
        password.classList.add("input-error");

        //Alert
        const Toast = Swal.mixin({
            toast: true,
            position: "top",
            iconColor: "white",
            customClass: {
                popup: "colored-toast",
            },
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true,
        });
        Toast.fire({
            icon: "error",
            title: `Las credenciales no son válidas`,
        });
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
