export class Tecnologia {
  id: number;
  nombre: string;
  tecnologia: string;
  porcentaje: number;
  UrlImagen: string;

  constructor(
    id: number,
    nombre: string,
    tecnologia: string,
    porcentaje: number,
    UrlImagen: string
  ) {
    this.id = id;
    this.nombre = nombre;
    this.tecnologia = tecnologia;
    this.porcentaje = porcentaje;
    this.UrlImagen = UrlImagen;
  }
}
