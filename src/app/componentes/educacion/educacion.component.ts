import { Component, OnInit } from '@angular/core';
import { EducacionService } from 'src/app/service/educacion.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TokenService } from 'src/app/servicios/token.service';
import { Educacion } from 'src/app/models/educacion';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css'],
})
export class EducacionComponent implements OnInit {
 
  isAdmin = false; 
  educaciones: Educacion[]=[];
  roles: string[];
  


  constructor(
    private educacionService: EducacionService,
   private activatedRoute: ActivatedRoute,
   private tokenService: TokenService,
   private formBuilder: FormBuilder,
    ) {}

  ngOnInit() :void {
    this.mostrar();
   this.isAdmin = this.tokenService.isAdmin();
  }
  
  
    
    mostrar(){
    this.educacionService.findAll().subscribe(
      res=>{this.educaciones=res;}
    );
  }

  eliminarEducacion(id: number):void{
    this.educacionService.delete(id).subscribe(
      data=>{
        this.mostrar();
      }
    )
  }

}
