export class ExperienciaLaboral {
  id: number;
  empresa: string; //nombre de la empresa
  actividad_empresa: string; // rubro de la empresa
  puesto: string;             //cargo en la empresa
  nivel_experiencia: string;   // junior, sennior, semi-sennior
  area_puesto: string;         //area del puesto que estuvo
  pais: string; //pais de la empresa
  fecha_inicio: Date;       // cuando comenzo
  fecha_finalizacion: Date; // termino o al presente
  descripcion_tarea: string;     //tareas que hacia
  personas_cargo: number;
  urlImagen: string; //

constructor(id: number, empresa: string, actividad_empresa: string,
     puesto: string, nivel_experiencia: string, area_puesto: string, pais: string, fecha_inicio:Date,fecha_finalizacion:Date,descripcion_tarea: string, personas_cargo: number){
        this.id = id;
        this.empresa = empresa;
        this.actividad_empresa = actividad_empresa;
        this.puesto = puesto;
        this.nivel_experiencia = nivel_experiencia;
        this.area_puesto = area_puesto;
        this.pais=pais;
        this.fecha_inicio = fecha_inicio;
        this.fecha_finalizacion = fecha_finalizacion;
        this.descripcion_tarea = descripcion_tarea;
        this.personas_cargo = personas_cargo;   
     }





}


