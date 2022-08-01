import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Tecnologia } from '../models/tecnologia';

@Injectable({
  providedIn: 'root'
})
export class TecnologiaService {
  tecUrl = environment.tecUrl;

  constructor(private httpClient: HttpClient) {}

   findAll(): Observable<Tecnologia[]> {
    return this.httpClient.get<Tecnologia[]>(`${this.tecUrl}`);
  }

  save(tecnologia: Tecnologia): Observable<Tecnologia> {
    return this.httpClient.post<Tecnologia>(this.tecUrl +'nuevo', tecnologia);
  }

  delete(id: number): Observable<void> {
    return this.httpClient.delete<void>(this.tecUrl + `delete/${id}`);
  }

  update(id:number,tecnologia:Tecnologia): Observable<Tecnologia> {
    return this.httpClient.put<Tecnologia>(this.tecUrl + `editar/${id}`, tecnologia);
  }

  detail(id: number): Observable<Tecnologia> {
    return this.httpClient.get<Tecnologia>(this.tecUrl + `${id}`);
  }
}