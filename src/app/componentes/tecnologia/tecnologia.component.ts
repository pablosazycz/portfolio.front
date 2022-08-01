import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Tecnologia } from 'src/app/models/tecnologia';
import { TecnologiaService } from 'src/app/service/tecnologia.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-tecnologia',
  templateUrl: './tecnologia.component.html',
  styleUrls: ['./tecnologia.component.css']
})
export class TecnologiaComponent implements OnInit {

  isAdmin = false; 
  tecnologias: Tecnologia[]=[];
  roles: string[];
  


  constructor(
    private tecnologiaService:TecnologiaService,
   private activatedRoute: ActivatedRoute,
   private tokenService: TokenService,
   private formBuilder: FormBuilder,
    ) {}

  ngOnInit() :void {
    this.mostrar();
   this.isAdmin = this.tokenService.isAdmin();
  }
  
  
    
    mostrar(){
    this.tecnologiaService.findAll().subscribe(
      res=>{this.tecnologias=res;}
    );
  }

  eliminarTecno(id: number):void{
    this.tecnologiaService.delete(id).subscribe(
      data=>{
        this.mostrar();
      }
    )
  }
  
  public mostrarPorcentaje(porcentaje:number){
    return ("width: "+ porcentaje +"%");
  }
}
