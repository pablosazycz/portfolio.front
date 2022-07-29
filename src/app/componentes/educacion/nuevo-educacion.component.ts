import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Educacion } from 'src/app/models/educacion';
import { EducacionService } from 'src/app/service/educacion.service';


@Component({
  selector: 'app-nuevo-educacion',
  templateUrl: './nuevo-educacion.component.html',
  styleUrls: ['./nuevo-educacion.component.css'],
})
export class NuevoEducacionComponent implements OnInit {
 
   nuevoForm: FormGroup;
   
  
  constructor(public fb: FormBuilder,
    private educacionService: EducacionService,
    private toastr: ToastrService,
    private router: Router
  ) {
    this.nuevoForm=this.fb.group({
    titulo :[''],
    pais :[''],
    tipo_estudio:[''],
    area_estudio :[''],
    institucion :[''],
    estado_estudio :[''],
    fecha_inicio :[''],
    fecha_finalizacion :[''],})

  }
  

  ngOnInit(): void {}

  onCreate(): void {
  /*  const educacion = new Educacion(
      this.titulo,
      this.pais,
      this.tipo_estudio,
      this.area_estudio,
      this.institucion,
      this.estado_estudio,
      this.fecha_inicio,
      this.fecha_finalizacion
    );*/
    this.educacionService.save(this.nuevoForm.value).subscribe(
      (data) => {
        this.toastr.success('Educacion Creada', 'OK', { timeOut: 3000 });
        this.router.navigate(['/educacion']);
      },
      (err) => {
        this.toastr.error('ERROR', 'Fail', {
          timeOut: 3000,
          positionClass: 'toast-top-center',
        });
      }
    );
  }
}
