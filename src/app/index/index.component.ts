import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Domicilio } from '../models/domicilio';
import { Persona } from '../models/persona';
import { DomicilioService } from '../service/domicilio.service';
import { PersonaService } from '../service/persona.service';
import { TokenService } from '../servicios/token.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent implements OnInit {
  nombreUsuario: string;
  isAdmin = false;
  persona: Persona;
  roles: string[];
  domicilio: Domicilio;

  constructor(
    private tokenService: TokenService,
    private personaService: PersonaService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private domicilioService: DomicilioService
  ) {}

  ngOnInit() {
    this.nombreUsuario = this.tokenService.getUserName();
    this.isAdmin = this.tokenService.isAdmin();
    this.mostrar();
    //this.domicilioid();
  }
  domicilioid(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.domicilioService.detail(id).subscribe(
      (data) => {
        this.domicilio = data;
      },
      (err) => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,
          positionClass: 'toast-top-center',
        });
      }
    );
  }

  mostrar(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.personaService.detail(1).subscribe(
      (data) => {
        this.persona = data;
      },
      (err) => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,
          positionClass: 'toast-top-center',
        });
      }
    );
  }
}
