import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PorfolioComponent } from './componentes/porfolio/porfolio.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistroComponent } from './auth/registro.component';
import { MenuComponent } from './menu/menu.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './auth/login.component';
import { interceptorProvider } from './interceptors/prod-interceptor.service';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { EditarEducacionComponent } from './componentes/educacion/editar-educacion.component';
import { NuevoEducacionComponent } from './componentes/educacion/nuevo-educacion.component';
import { ExperienciaLaboralComponent } from './componentes/experiencia-laboral/experiencia-laboral.component';
import { EditarExperienciaLaboralComponent } from './componentes/experiencia-laboral/editar-experiencia-laboral.component';
import { NuevoExperienciaLaboralComponent } from './componentes/experiencia-laboral/nuevo-experiencia-laboral.component';
import { DomicilioComponent } from './componentes/domicilio/domicilio/domicilio.component';
import { NuevodomicilioComponent } from './componentes/domicilio/nuevodomicilio/nuevodomicilio.component';
import { EditardomicilioComponent } from './componentes/domicilio/editardomicilio/editardomicilio.component';
import { PersonaComponent } from './componentes/persona/persona.component';

import { ProyectoComponent } from './componentes/proyecto/proyecto.component';
import { NuevoproyectoComponent } from './componentes/proyecto/nuevoproyecto/nuevoproyecto.component';

import { NuevaTecnologiaComponent } from './componentes/tecnologia/nueva-tecnologia/nueva-tecnologia.component';
import { EditarTecnologiaComponent } from './componentes/tecnologia/editar-tecnologia/editar-tecnologia.component';
import { TecnologiaComponent } from './componentes/tecnologia/tecnologia.component';
import { EditarpersonaComponent } from './componentes/persona/editarpersona/editarpersona.component';
import { EditarproyectoComponent } from './componentes/proyecto/editarproyecto/editarproyecto.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EncabezadoComponent,
    EducacionComponent,
    PorfolioComponent,
    RegistroComponent,
    MenuComponent,
    IndexComponent,
    EditarEducacionComponent,
    NuevoEducacionComponent,
    ExperienciaLaboralComponent,
    EditarExperienciaLaboralComponent,
    NuevoExperienciaLaboralComponent,
    DomicilioComponent,
    NuevodomicilioComponent,
    EditardomicilioComponent,
    PersonaComponent,
    EditarpersonaComponent,
    ProyectoComponent,
    NuevoproyectoComponent,
    EditarproyectoComponent,
    NuevaTecnologiaComponent,
    EditarTecnologiaComponent,
    TecnologiaComponent,
  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    
  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
