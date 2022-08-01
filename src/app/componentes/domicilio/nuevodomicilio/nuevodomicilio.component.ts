import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DomicilioService } from 'src/app/service/domicilio.service';

@Component({
  selector: 'app-nuevodomicilio',
  templateUrl: './nuevodomicilio.component.html',
  styleUrls: ['./nuevodomicilio.component.css']
})
export class NuevodomicilioComponent implements OnInit {
  nuevoForm: FormGroup;
   
  
  constructor(public fb: FormBuilder,
    private domicilioService: DomicilioService,
    private toastr: ToastrService,
    private router: Router
  ) {
    this.nuevoForm=this.fb.group({
    
     calle: [''],
     numero: [''],
     barrio: [''],
     provincia: [''],})

  }
  

  ngOnInit(): void {}

  onCreate(): void {
      this.domicilioService.save(this.nuevoForm.value).subscribe(
      (data) => {
        
        this.toastr.success('Domicilio Creado', 'OK', { 
          
          timeOut: 3000,
          positionClass: 'toast-top-center',
          
         });
        this.router.navigate(['/']);
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
