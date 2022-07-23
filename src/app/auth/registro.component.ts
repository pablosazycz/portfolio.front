import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NuevoUsuario } from '../models/nuevo-usuario';
import { AuthService } from '../servicios/auth.service';
import { TokenService } from '../servicios/token.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  

   nuevoUsuario!: NuevoUsuario;
  nombre: string;
  email: string;
  nombreUsuario!: string;
  password!: string;
  errMsj!: string;
  
  constructor(
    private tokenService: TokenService,
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
     }

  onRegister(): void {
    this.nuevoUsuario = new NuevoUsuario(this.nombre,this.nombreUsuario,this.email, this.password);
    this.authService.nuevo(this.nuevoUsuario).subscribe(
      (data) => {
        this.toastr.success('Su cuenta ha sido creada ', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/']);
      },
      (err) => {
                this.errMsj = err.error.mensaje;
        this.toastr.error(this.errMsj, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        console.log(this.errMsj);
      }
    );
  }
}
