//page~~>AGREGAR TURNOS<~~ Lógica de formularios
class Paciente {
    constructor(dni, apellido, nombre, email, telefono) {
        this.dni = dni;
        this.apellido = apellido;
        this.nombre = nombre;
        this.email = email;
        this.telefono = telefono;
    }
}
class Eleccion {
    constructor(area, dia, hora, obra) {
        this.area = area;
        this.dia = dia;
        this.hora = hora;
        this.obra = obra;
    }
}

// ~~~~> iniciamos FORMULARIOS
// Esto sería: ARRAY_PACIENTES [];
let ARRAY_PACIENTES = JSON.parse(localStorage.getItem("Pacientes")) || [];

// Definimos en alcance global
let datosPaciente = {};
let datosEleccion = {};

// ~~~~>Form1
const form = document.getElementById("form1");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!validarFormulario()) {
        return;
    }
    obtenerDatos();
    mostrarForm();
    botonesGuias();
});
const obtenerDatos = () => {
    pedirDNI();
    pedirApellido();
    pedirNombre();
    pedirEmail();
    pedirTelefono();
};

const mostrarForm = () => {
    form.style.display = "none";
    form2.style.display = "block";
};
const botonesGuias = () => {
    const habilitarTabs = document.getElementById("btn-form1");
    habilitarTabs.classList.add("active");
};
// --> fin FORM1

// ~~~~>Form2
const form2 = document.getElementById("form2");

form2.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!validarSelect()) {
        return;
    }
    obtenerDatosEleccion();
    crearObjetoPaciente();
    mostrarForm2();
    botonesGuias2();
});

const obtenerDatosEleccion = () => {
    const selects = document.querySelectorAll("#form2 select");
    selects.forEach((s) =>
        ["area", "dia", "hora", "obra"].includes(s.id)
            ? (datosEleccion[s.id] = s.value.toUpperCase())
            : null
    );
};

const crearObjetoPaciente = () => {
    const suEleccion = new Eleccion(
        datosEleccion.area,
        datosEleccion.dia,
        datosEleccion.hora,
        datosEleccion.obra
    );
    const nuevoPaciente = new Paciente(
        datosPaciente.dni,
        datosPaciente.apellido,
        datosPaciente.nombre,
        datosPaciente.email,
        datosPaciente.telefono
    );
    const pacienteAndSeleccion = [nuevoPaciente, suEleccion];
    ARRAY_PACIENTES.push(pacienteAndSeleccion);
};
const mostrarForm2 = () => {
    form2.style.display = "none";
    form3.style.display = "block";
};
const botonesGuias2 = () => {
    const habilitarTabs2 = document.getElementById("btn-form2");
    habilitarTabs2.classList.add("active");
};
// --> fin FORM2

// ~~~~>Form3
const form3 = document.getElementById("form3");

const isSubmit = (e) => {
    e.preventDefault();
    upToLocalStorage();
    msjExitoToPage();
    mostrarForm3();
    botonesGuias3();
    form3.removeEventListener("submit", isSubmit);
};
form3.addEventListener("submit", isSubmit);

const upToLocalStorage = () => {
    localStorage.setItem("Pacientes", JSON.stringify(ARRAY_PACIENTES));
};
const msjExitoToPage = async () => {
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
    await Toast.fire({
        icon: "success",
        title: "¡Agregado con Éxito!",
    });
};
const mostrarForm3 = () => {
    form2.style.display = "none";
    form3.style.display = "block";
};
const botonesGuias3 = () => {
    const habilitarTabs3 = document.getElementById("btn-form3");
    habilitarTabs3.classList.add("active");
};
// --> fin FORM3

//~~> fix's
ARRAY_PACIENTES === " " ? localStorage.removeItem("Pacientes") : false;
