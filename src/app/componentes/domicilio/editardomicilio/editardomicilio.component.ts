import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Domicilio } from 'src/app/models/domicilio';
import { DomicilioService } from 'src/app/service/domicilio.service';

@Component({
  selector: 'app-editardomicilio',
  templateUrl: './editardomicilio.component.html',
  styleUrls: ['./editardomicilio.component.css']
})
export class EditardomicilioComponent implements OnInit {

  domicilio: Domicilio ;

  constructor(
    private domicilioService: DomicilioService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
    ) { }



  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['id'];
    
    this.domicilioService.detail(id).subscribe(
      data => {
        this.domicilio = data;
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
    
    this.domicilioService.update(id, this.domicilio).subscribe(
      data => {
        this.toastr.success('Domicilio Actualizado', 'OK', {
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
