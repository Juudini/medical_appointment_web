export class Choice {
    constructor(area, dia, hora, obra) {
        this.area = area;
        this.dia = dia;
        this.hora = hora;
        this.obra = obra;
    }
    updateObra(newObra) {
        this.obra = newObra;
    }
    updateDia(newDia) {
        this.dia = newDia;
    }
    updateHora(newHora) {
        this.hora = newHora;
    }
}
