import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Proyecto } from 'src/app/models/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {


  isAdmin = false; 
  proyectos: Proyecto[]=[];
  roles: string[];
  


  constructor(
    private proyectoService: ProyectoService,
   private activatedRoute: ActivatedRoute,
   private tokenService: TokenService,
   private formBuilder: FormBuilder,
    ) {}

  ngOnInit() :void {
    this.mostrar();
   this.isAdmin = this.tokenService.isAdmin();
  }
  
  
    
    mostrar(){
    this.proyectoService.findAll().subscribe(
      res=>{this.proyectos=res;}
    );
  }

  eliminarProyecto(id: number):void{
    this.proyectoService.delete(id).subscribe(
      data=>{
        this.mostrar();
      }
    )
  }

}
