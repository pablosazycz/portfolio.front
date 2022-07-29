import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Educacion } from '../models/educacion';
@Injectable({
  providedIn: 'root',
})
export class EducacionService {
  eduUrl = environment.eduUrl;

  constructor(private httpClient: HttpClient) {}

   findAll(): Observable<Educacion[]> {
    return this.httpClient.get<Educacion[]>(`${this.eduUrl}`);
  }

  save(educacion: Educacion): Observable<Educacion> {
    return this.httpClient.post<Educacion>(this.eduUrl +'nuevo', educacion);
  }

  delete(id: number): Observable<void> {
    return this.httpClient.delete<void>(this.eduUrl + `delete/${id}`);
  }

  update(id:number,educacion:Educacion): Observable<Educacion> {
    return this.httpClient.put<Educacion>(this.eduUrl + `editar/${id}`, educacion);
  }

  detail(id: number): Observable<Educacion> {
    return this.httpClient.get<Educacion>(this.eduUrl + `${id}`);
  }
}
