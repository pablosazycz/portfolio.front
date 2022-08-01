export class Persona {
  id: number;
  nombre: string;
  apellido: string;
  fecha_nac: string;
  profesion: string;
  url_foto: string;
  acercaDe: string;
  nacionalidad: string;
  genero: string;
  estado_civil: string;
  dni: number;
  email: string;
  cel: number;

  constructor(
    id: number,
    nombre: string,
    apellido: string,
    fecha_nac: string,
    profesion: string,
    url_foto: string,
    acercaDe: string,
    nacionalidad: string,
    genero: string,
    estado_civil: string,
    dni: number,
    email: string,
    cel: number
  ) {
    this.id = id;
    this.nombre = nombre;
    this.apellido = apellido;
    this.fecha_nac = fecha_nac;
    this.profesion = profesion;
    this.url_foto = url_foto;
    this.acercaDe = acercaDe;
    this.nacionalidad = nacionalidad;
    this.genero = genero;
    this.estado_civil = estado_civil;
    this.dni=dni;
    this.email = email;
    this.cel = cel;
  }
}
