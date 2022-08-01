import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Proyecto } from '../models/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  proyUrl = environment.proyUrl;

  constructor(private httpClient: HttpClient) {}

   findAll(): Observable<Proyecto[]> {
    return this.httpClient.get<Proyecto[]>(`${this.proyUrl}`);
  }

  save(proyecto: Proyecto): Observable<Proyecto> {
    return this.httpClient.post<Proyecto>(this.proyUrl +'nuevo', proyecto);
  }

  delete(id: number): Observable<void> {
    return this.httpClient.delete<void>(this.proyUrl + `delete/${id}`);
  }

  update(id:number,proyecto:Proyecto): Observable<Proyecto> {
    return this.httpClient.put<Proyecto>(this.proyUrl + `editar/${id}`, proyecto);
  }

  detail(id: number): Observable<Proyecto> {
    return this.httpClient.get<Proyecto>(this.proyUrl + `${id}`);
  }
}
