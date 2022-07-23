import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './auth/registro.component';
import { LoginComponent } from './auth/login.component';
import { PorfolioComponent } from './componentes/porfolio/porfolio.component';
import { IndexComponent } from './index/index.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { ProdGuardService } from './guards/prod-guard.service';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'registro', component: RegistroComponent,canActivate:[LoginGuard]},
  { path: 'porfolio', component: PorfolioComponent },
  { path: 'login', component: LoginComponent, canActivate:[LoginGuard] },
  { path: 'educacion', component: EducacionComponent, canActivate:[ProdGuardService],data: {expectedRol: ['admin','user' ]}},
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
