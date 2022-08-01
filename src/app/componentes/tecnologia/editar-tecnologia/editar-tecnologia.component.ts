import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Tecnologia } from 'src/app/models/tecnologia';
import { TecnologiaService } from 'src/app/service/tecnologia.service';

@Component({
  selector: 'app-editar-tecnologia',
  templateUrl: './editar-tecnologia.component.html',
  styleUrls: ['./editar-tecnologia.component.css']
})
export class EditarTecnologiaComponent implements OnInit {


  tecnologia: Tecnologia ;

  constructor(
    private tecnologiaService: TecnologiaService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
    ) { }



  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['id'];
    
    this.tecnologiaService.detail(id).subscribe(
      data => {
        this.tecnologia = data;
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',

        });
        
      }
    );
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    
    this.tecnologiaService.update(id, this.tecnologia).subscribe(
      data => {
        this.toastr.success('Tecnologia Actualizada', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/']);
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        this.router.navigate(['/']);
      }
    );
  }
}
