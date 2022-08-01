import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-nuevoproyecto',
  templateUrl: './nuevoproyecto.component.html',
  styleUrls: ['./nuevoproyecto.component.css']
})
export class NuevoproyectoComponent implements OnInit {

  nuevoForm: FormGroup;
   
  
  constructor(public fb: FormBuilder,
    private proyectoService: ProyectoService,
    private toastr: ToastrService,
    private router: Router
  ) {
    this.nuevoForm=this.fb.group({
     nombre:[''],
     descripcion:[''],
     urlProyecto:[''],
     urlImagen:[''],})

  }
  

  ngOnInit(): void {}

  onCreate(): void {
      this.proyectoService.save(this.nuevoForm.value).subscribe(
      (data) => {
        
        this.toastr.success('Proyecto Creado', 'OK', { 
          
          timeOut: 3000,
          positionClass: 'toast-top-center',
          
         });
        this.router.navigate(['/#proyecto']);
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
