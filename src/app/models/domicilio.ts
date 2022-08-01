export class Domicilio {
    id:  number;
    calle: string;
    numero: number; 
    barrio: string;
    provincia: string;

    constructor(id: number, calle: string, numero: number, barrio: string, provincia: string) { 
        this.id = id;
        this.calle = calle;
        this.numero = numero;
        this.barrio = barrio;
        this.provincia = provincia;
        }
}
