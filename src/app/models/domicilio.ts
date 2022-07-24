export class Domicilio {
    id:  number;
    calle: string;
    numero: number; 

    constructor(id: number, calle: string, numero: number) { 
        this.id = id;
        this.calle = calle;
        this.numero = numero;
        }
}
