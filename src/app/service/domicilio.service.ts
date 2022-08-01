import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Domicilio } from '../models/domicilio';

@Injectable({
  providedIn: 'root'
})
export class DomicilioService {
  domUrl = environment.domUrl;

  constructor(private httpClient: HttpClient) {}

   findAll(): Observable<Domicilio[]> {
    return this.httpClient.get<Domicilio[]>(`${this.domUrl}`);
  }

  save(domicilio: Domicilio): Observable<Domicilio> {
    return this.httpClient.post<Domicilio>(this.domUrl +'nuevo', domicilio);
  }

  delete(id: number): Observable<void> {
    return this.httpClient.delete<void>(this.domUrl + `delete/${id}`);
  }

  update(id:number,domicilio:Domicilio): Observable<Domicilio> {
    return this.httpClient.put<Domicilio>(this.domUrl + `editar/${id}`, domicilio);
  }

  detail(id: number): Observable<Domicilio> {
    return this.httpClient.get<Domicilio>(this.domUrl + `${id}`);
  }
}
