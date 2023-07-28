// page~~>LOGIN<~~ Esto pertenece a la Page INDEX.html
"use strict";
//Modules

import { $getById } from "./utils/selectors.js";
import { alert } from "./utils/alerts.js";
const USER = { user: "admin", password: "admin" };

const btnLogin = $getById("btnLogin");
btnLogin.addEventListener("click", login);

function login(e) {
    e.preventDefault();
    let user = $getById("user").value;
    let passw = $getById("password").value;

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
            $getById("login-form").style.display = "none";
            $getById("main-content").style.display = "block";
        });
    } else {
        password.classList.add("input-error");
        alert("top", "error", `Invalid credentials`, 1500);
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
