import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './auth/registro.component';
import { LoginComponent } from './auth/login.component';
import { PorfolioComponent } from './componentes/porfolio/porfolio.component';
import { IndexComponent } from './index/index.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { ProdGuardService } from './guards/prod-guard.service';
import { LoginGuard } from './guards/login.guard';
import { EditarEducacionComponent } from './componentes/educacion/editar-educacion.component';
import { NuevoEducacionComponent } from './componentes/educacion/nuevo-educacion.component';
import { ExperienciaLaboralComponent } from './componentes/experiencia-laboral/experiencia-laboral.component';
import { ExperienciaLaboral } from './models/experiencia-laboral';
import { EditarExperienciaLaboralComponent } from './componentes/experiencia-laboral/editar-experiencia-laboral.component';
import { NuevoExperienciaLaboralComponent } from './componentes/experiencia-laboral/nuevo-experiencia-laboral.component';
import { PersonaComponent } from './componentes/persona/persona.component';
import { EditarpersonaComponent } from './componentes/persona/editarpersona/editarpersona.component';
import { ProyectoComponent } from './componentes/proyecto/proyecto.component';
import { EditarproyectoComponent } from './componentes/proyecto/editarproyecto/editarproyecto.component';
import { NuevoproyectoComponent } from './componentes/proyecto/nuevoproyecto/nuevoproyecto.component';
import { TecnologiaComponent } from './componentes/tecnologia/tecnologia.component';
import { EditarTecnologiaComponent } from './componentes/tecnologia/editar-tecnologia/editar-tecnologia.component';
import { NuevaTecnologiaComponent } from './componentes/tecnologia/nueva-tecnologia/nueva-tecnologia.component';
import { DomicilioComponent } from './componentes/domicilio/domicilio/domicilio.component';
import { EditardomicilioComponent } from './componentes/domicilio/editardomicilio/editardomicilio.component';
import { NuevodomicilioComponent } from './componentes/domicilio/nuevodomicilio/nuevodomicilio.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'registro', component: RegistroComponent, canActivate: [LoginGuard] },
  //{ path: 'porfolio', component: PorfolioComponent },
  { path: 'login', component: LoginComponent, canActivate: [LoginGuard] },
  {
    path: 'educacion',
    component: EducacionComponent,
    canActivate: [ProdGuardService],
    data: { expectedRol: ['admin', 'user'] },
  },
  {
    path: 'educacion/editar/:id',
    component: EditarEducacionComponent,
    canActivate: [ProdGuardService],
    data: { expectedRol: ['admin'] },
  },
 
  {
    path: 'educacion/nuevo',
    component: NuevoEducacionComponent,
    canActivate: [ProdGuardService],
    data: { expectedRol: ['admin'] },
  },
  {
    path: 'experiencialaboral',
    component: ExperienciaLaboralComponent,
    canActivate: [ProdGuardService],
    data: { expectedRol: ['admin', 'user'] },
  },
  {
    path: 'experiencialaboral/editar/:id',
    component: EditarExperienciaLaboralComponent,
    canActivate: [ProdGuardService],
    data: { expectedRol: ['admin'] },
  },
 
  {
    path: 'experiencialaboral/nuevo',
    component: NuevoExperienciaLaboralComponent,
    canActivate: [ProdGuardService],
    data: { expectedRol: ['admin'] },
  },
  {
    path: 'persona',
    component: PersonaComponent,
    canActivate: [ProdGuardService],
    data: { expectedRol: ['admin', 'user'] },
  },
  {
    path: 'persona/editar/:id',
    component: EditarpersonaComponent,
    canActivate: [ProdGuardService],
    data: { expectedRol: ['admin'] },
  },
  
  {
    path: 'proyecto',
    component: ProyectoComponent,
    canActivate: [ProdGuardService],
    data: { expectedRol: ['admin', 'user'] },
  },
  {
    path: 'proyecto/editar/:id',
    component: EditarproyectoComponent,
    canActivate: [ProdGuardService],
    data: { expectedRol: ['admin'] },
  },
 
  {
    path: 'proyecto/nuevo',
    component: NuevoproyectoComponent,
    canActivate: [ProdGuardService],
    data: { expectedRol: ['admin'] },
  },
  {
    path: 'tecnologia',
    component: TecnologiaComponent,
    canActivate: [ProdGuardService],
    data: { expectedRol: ['admin', 'user'] },
  },
  {
    path: 'tecnologia/editar/:id',
    component: EditarTecnologiaComponent,
    canActivate: [ProdGuardService],
    data: { expectedRol: ['admin'] },
  },
 
  {
    path: 'tecnologia/nuevo',
    component: NuevaTecnologiaComponent,
    canActivate: [ProdGuardService],
    data: { expectedRol: ['admin'] },
  },
  {
    path: 'domicilio',
    component: DomicilioComponent,
    canActivate: [ProdGuardService],
    data: { expectedRol: ['admin', 'user'] },
  },
  {
    path: 'domicilio/editar/:id',
    component: EditardomicilioComponent,
    canActivate: [ProdGuardService],
    data: { expectedRol: ['admin'] },
  },
 
  {
    path: 'domicilio/nuevo',
    component: NuevodomicilioComponent,
    canActivate: [ProdGuardService],
    data: { expectedRol: ['admin'] },
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
