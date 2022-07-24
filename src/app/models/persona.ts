export class Persona {
  id: number;
  nombre: string;
  apellido: string;
  fecha_nac: string;
  profesion: string;
  url_foto: string;
  acercaDe: string;

constructor( id: number, nombre: string,apellido: string,fecha_nac: string,profesion: string,url_foto: string,acercaDe: string){
    this.id = id;
    this.nombre = nombre;
    this.apellido = apellido;
    this.fecha_nac = fecha_nac;
    this.profesion = profesion;
    this.url_foto = url_foto;
    this.acercaDe = acercaDe;
}

}
