export class Choice {
    constructor(area, dia, hora, obra) {
        this.area = area;
        this.dia = dia;
        this.hora = hora;
        this.obra = obra;
    }
    updateArea(newArea) {
        this.obra = newArea;
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
