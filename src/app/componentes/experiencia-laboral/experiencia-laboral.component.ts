import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ExperienciaLaboral } from 'src/app/models/experiencia-laboral';
import { ExperienciaLaboralService } from 'src/app/service/experiencia-laboral.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-experiencia-laboral',
  templateUrl: './experiencia-laboral.component.html',
  styleUrls: ['./experiencia-laboral.component.css']
})
export class ExperienciaLaboralComponent implements OnInit {

  isAdmin = false; 
  experiencias: ExperienciaLaboral[]=[];
  roles: string[];
  


  constructor(
    private experienciaLaboralService: ExperienciaLaboralService,
   private activatedRoute: ActivatedRoute,
   private tokenService: TokenService,
   private formBuilder: FormBuilder,
    ) {}

  ngOnInit() :void {
    this.mostrar();
   this.isAdmin = this.tokenService.isAdmin();
  }
  
  
    
    mostrar(){
    this.experienciaLaboralService.findAll().subscribe(
      res=>{this.experiencias=res;}
    );
  }

  eliminarExp(id: number):void{
    this.experienciaLaboralService.delete(id).subscribe(
      data=>{
        this.mostrar();
      }
    )
  }

}



