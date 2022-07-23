export class Educacion {
  id?: number;

  titulo!: string; //titulo del estudio
  pais!: string; // donde estudio
  tipo_estudio!: string; //primario, secundario, terciario, etc
  area_estudio!: string; //salud, ingenieria ,etc
  institucion!: string; //nombre de la institucion
  estado_estudio!: string; //finalizo o en curso

  //@Temporal(javax.persistence.TemporalType.DATE)
  fecha_inicio!: Date; //cuando comenzo
  //@Temporal(javax.persistence.TemporalType.DATE)
  fecha_finalizacion!: Date; //cuando termino

  constructor(
    titulo: string,
    pais: string,
    tipo_estudio: string,
    area_estudio: string,
    institucion: string,
    estado_estudio: string,
    fecha_inicio: Date,
    fecha_finalizacion: Date
  ) {
    this.titulo = titulo;
    this.pais = pais;
    this.tipo_estudio = tipo_estudio;
    this.area_estudio = area_estudio;
    this.institucion = institucion;
    this.estado_estudio = estado_estudio;
    this.fecha_inicio = fecha_inicio;
    this.fecha_finalizacion = fecha_finalizacion;
  }
}
