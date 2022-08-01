export class Proyecto {
    id:number;
     nombre:string;
     descripcion:string;
     urlProyecto:string;
     urlImagen:string;

     constructor(id:number, nombre:string, descripcion:string, urlProyecto:string, urlImagen:string) {
        this.id = id;   
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.urlProyecto = urlProyecto;
        this.urlImagen = urlImagen;
     }

    }
