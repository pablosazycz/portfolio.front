import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ExperienciaLaboral } from 'src/app/models/experiencia-laboral';
import { ExperienciaLaboralService } from 'src/app/service/experiencia-laboral.service';


@Component({
  selector: 'app-editar-experiencia-laboral',
  templateUrl: './editar-experiencia-laboral.component.html',
  styleUrls: ['./editar-experiencia-laboral.component.css']
})
export class EditarExperienciaLaboralComponent implements OnInit {

  experienciaLaboral: ExperienciaLaboral ;

  constructor(
    private experienciaLaboralService: ExperienciaLaboralService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
    ) { }



  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['id'];
    
    this.experienciaLaboralService.detail(id).subscribe(
      data => {
        this.experienciaLaboral = data;
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
    
    this.experienciaLaboralService.update(id, this.experienciaLaboral).subscribe(
      data => {
        this.toastr.success('Experiencia Laboral Actualizada', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/experiencialaboral']);
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
