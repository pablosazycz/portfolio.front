import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Persona } from 'src/app/models/persona';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  
  isAdmin = false; 
  persona: Persona;
  roles: string[];
   educacionService: any;
  


  constructor(
    private personaService: PersonaService,
   private activatedRoute: ActivatedRoute,
   private tokenService: TokenService,
   private formBuilder: FormBuilder,
   private toastr: ToastrService
    ) {}

  ngOnInit() :void {
   
   this.isAdmin = this.tokenService.isAdmin();
  
    const id = this.activatedRoute.snapshot.params['id'];
        this.personaService.detail(1).subscribe(
      data => {
        this.persona = data;
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',

        });
        
      }
    );
  }

  
  eliminarPersona(id: number):void{
    this.personaService.delete(id).subscribe(
      data=>{
       
      }
    )
  }
 


}
