//~~>Validation login
export const checkUser = () => {
    let dataUser = JSON.parse(localStorage.getItem("UserLog"));
    dataUser !== "1" ? (window.location.href = "./../../../index.html") : false;
};

export const exitBtnEvent = () => {
    let exitBtn = document.querySelector("#exit-button");
    exitBtn.addEventListener("click", function () {
        localStorage.setItem("UserLog", JSON.stringify("0"));
        window.location.href = "./../../../index.html";
    });
};
