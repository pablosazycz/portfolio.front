import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ExperienciaLaboralService } from 'src/app/service/experiencia-laboral.service';

@Component({
  selector: 'app-nuevo-experiencia-laboral',
  templateUrl: './nuevo-experiencia-laboral.component.html',
  styleUrls: ['./nuevo-experiencia-laboral.component.css'],
})
export class NuevoExperienciaLaboralComponent implements OnInit {
  nuevoForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    private experienciaLaboralService: ExperienciaLaboralService,
    private toastr: ToastrService,
    private router: Router
  ) {
    this.nuevoForm = this.fb.group({
      urlImagen: [''],
      empresa: [''],
      actividad_empresa: [''],
      puesto: [''],
      nivel_experiencia: [''],
      area_puesto: [''],
      pais: [''],
      fecha_inicio: [''],
      fecha_finalizacion: [''],
      descripcion_tarea: [''],
      personas_cargo: [''],


    });
  }

  ngOnInit(): void {}

  onCreate(): void {
       this.experienciaLaboralService.save(this.nuevoForm.value).subscribe(
      (data) => {
        this.toastr.success('Experiencia Laboral Creada', 'OK', {
          timeOut: 3000,
        });
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
