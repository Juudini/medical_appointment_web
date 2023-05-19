//page~~>GESTIONAR TURNOS<~~  MOSTRAR DATOS en tabla.

const tablaDatos = document.getElementById("tablaDatos");

const verDatos = () => {
    const PACIENTES = JSON.parse(localStorage.getItem("Pacientes")) || [];
    tablaDatos.innerHTML = "";

    PACIENTES.forEach((paciente, index) => {
        const [nuevoPaciente, eleccion] = paciente;

        let pacienteFila = document.createElement("tr");
        let area = document.createElement("td");
        let fecha = document.createElement("td");
        let nombre = document.createElement("td");
        let obraSocial = document.createElement("td");
        let telefono = document.createElement("td");
        let eliminar = document.createElement("td");
        let btnEliminar = document.createElement("button");

        nombre.textContent = `${nuevoPaciente.apellido} ${nuevoPaciente.nombre}`;
        area.textContent = eleccion.area;
        fecha.textContent = `${eleccion.dia}, ${eleccion.hora}`;
        obraSocial.textContent = eleccion.obra;
        telefono.textContent = nuevoPaciente.telefono;

        // Botón Eliminar paciente
        btnEliminar.textContent = "Eliminar";
        btnEliminar.setAttribute("btn-id", index);
        btnEliminar.classList.add("btn", "btn-danger", "btn-sm");
        eliminar.appendChild(btnEliminar);
        // --> fin Botón Eliminar paciente

        pacienteFila.appendChild(area);
        pacienteFila.appendChild(fecha);
        pacienteFila.appendChild(nombre);
        pacienteFila.appendChild(obraSocial);
        pacienteFila.appendChild(telefono);
        pacienteFila.appendChild(eliminar);
        tablaDatos.appendChild(pacienteFila);

        btnEliminar.addEventListener("click", (e) => {
            const BTN_ID = e.target.getAttribute("btn-id");
            eliminarPaciente(BTN_ID);
        });
    });
};
// Botón eliminar (individual por paciente)
const eliminarPaciente = (BTN_ID) => {
    Swal.fire({
        title: "¿Estás seguro?",
        text: "No podrás deshacer esta acción!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#716add",
        cancelButtonColor: "#d33",
        background: "#fff url(./../images/trees.png)",
        confirmButtonText: "Si, elimínalo!",
        cancelButtonText: "Cancelar",
    }).then((result) => {
        if (result.isConfirmed) {
            eliminarConfirmado(BTN_ID);
        }
    });
};
const eliminarConfirmado = (BTN_ID) => {
    const pacientes = JSON.parse(localStorage.getItem("Pacientes")) || [];
    pacientes.splice(BTN_ID, 1);
    localStorage.setItem("Pacientes", JSON.stringify(pacientes));
    const Toast = Swal.mixin({
        toast: true,
        position: "top-right",
        iconColor: "white",
        customClass: {
            popup: "colored-toast",
        },
        showConfirmButton: false,
        timer: 1800,
        timerProgressBar: true,
    });
    Toast.fire({
        icon: "info",
        title: "Paciente Eliminado",
    });
    verDatos();
};
//~~> fin Botón eliminar.

// Botón Vaciar Tabla
const btnVaciarTabla = document.getElementById("btnVaciarTabla");
btnVaciarTabla.addEventListener("click", vaciarTabla);

function vaciarTabla() {
    Swal.fire({
        title: "¡Estas por vaciar la tabla!",
        width: 600,
        padding: "3em",
        color: "#716add",
        background: "#fff url(./../images/trees.png)",
        backdrop: `
            rgba(0,0,123,0.4)
            url("./../images/nyan-cat.gif")
            left top
            no-repeat`,
        showCancelButton: true,
        confirmButtonColor: "#716add",
        cancelButtonColor: "#d33",
        confirmButtonText: "¡Si, vaciar!",
        cancelButtonText: "Cancelar",
    }).then((result) => {
        if (result.isConfirmed) {
            localStorage.removeItem("Pacientes");
            location.reload();
        }
    });
}
//~~> fin Botón Vaciar Tabla.

//Botón Llenar Tabla (Cargar pacientes desde API)
const llenarTabla = document.getElementById("llenarTabla");
llenarTabla.addEventListener("click", uploadPacientes);

function uploadPacientes() {
    mostrarAlert = mostrarLoading(); // Mostrar el loading y almacenar
    upToLocalStoragePacientes().then(() => {
        console.log("🐢🐢¡¡Carga exitosa en tabla!!🐢🐢");
        location.reload();
        Swal.close(mostrarAlert);
    });
}
function mostrarLoading() {
    return Swal.fire({
        html:
            '<div class="sk-folding-cube">' +
            '<div class="sk-cube1 sk-cube"></div>' +
            '<div class="sk-cube2 sk-cube"></div>' +
            '<div class="sk-cube4 sk-cube"></div>' +
            '<div class="sk-cube3 sk-cube"></div>' +
            "</div>",
        title: "Cargando...",
        color: "#716add",
        showConfirmButton: false,
    });
}
//~~> fin Botón Llenar Tabla.
verDatos();
