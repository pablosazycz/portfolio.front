import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Domicilio } from 'src/app/models/domicilio';
import { DomicilioService } from 'src/app/service/domicilio.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-domicilio',
  templateUrl: './domicilio.component.html',
  styleUrls: ['./domicilio.component.css']
})
export class DomicilioComponent implements OnInit {
  isAdmin = false; 
  domicilios:Domicilio[]=[];
  roles: string[];
  domicilio : Domicilio;
  
  constructor(
    private domicilioService: DomicilioService,
   private activatedRoute: ActivatedRoute,
   private tokenService: TokenService,
   private formBuilder: FormBuilder,
    ) {}

  ngOnInit() :void {
    this.mostrar();
   this.isAdmin = this.tokenService.isAdmin();
  }
  
  
    
    mostrar(){
    this.domicilioService.findAll().subscribe(
      res=>{this.domicilios=res;}
    );
  }

  eliminarEducacion(id: number):void{
    this.domicilioService.delete(id).subscribe(
      data=>{
        this.mostrar();
      }
    )
  }

}
