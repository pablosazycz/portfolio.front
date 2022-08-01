import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ExperienciaLaboral } from '../models/experiencia-laboral';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaLaboralService {
  expUrl= environment.expUrl;

  constructor(private httpClient: HttpClient) {}

   findAll(): Observable<ExperienciaLaboral[]> {
    return this.httpClient.get<ExperienciaLaboral[]>(`${this.expUrl}`);
  }

  save(experienciaLaboral: ExperienciaLaboral): Observable<ExperienciaLaboral> {
    return this.httpClient.post<ExperienciaLaboral>(this.expUrl +'nuevo', experienciaLaboral);
  }

  delete(id: number): Observable<void> {
    return this.httpClient.delete<void>(this.expUrl + `delete/${id}`);
  }

  update(id:number,experienciaLaboral:ExperienciaLaboral): Observable<ExperienciaLaboral> {
    return this.httpClient.put<ExperienciaLaboral>(this.expUrl + `editar/${id}`, experienciaLaboral);
  }

  detail(id: number): Observable<ExperienciaLaboral> {
    return this.httpClient.get<ExperienciaLaboral>(this.expUrl + `${id}`);
  }
}

