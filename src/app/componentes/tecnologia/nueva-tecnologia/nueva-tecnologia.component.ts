import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TecnologiaService } from 'src/app/service/tecnologia.service';

@Component({
  selector: 'app-nueva-tecnologia',
  templateUrl: './nueva-tecnologia.component.html',
  styleUrls: ['./nueva-tecnologia.component.css']
})
export class NuevaTecnologiaComponent implements OnInit {

  nuevoForm: FormGroup;
  
   
  
  constructor(public fb: FormBuilder,
    private tecnologiaService: TecnologiaService,
    private toastr: ToastrService,
    private router: Router
  ) {
    this.nuevoForm=this.fb.group({
    titulo :[''],
    nombre: [''],
  tecnologia: [''],
  porcentaje: [''],
  urlImagen: [''],
    })

  }
  

  ngOnInit(): void {}

  onCreate(): void {
    this.tecnologiaService.save(this.nuevoForm.value).subscribe(
      (data) => {
        this.toastr.success('Tecnologia Creada', 'OK', { timeOut: 3000 });
        this.router.navigate(['/#tecnologia']);
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
