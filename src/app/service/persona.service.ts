import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Persona } from '../models/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  persUrl = environment.persUrl;

  constructor(private httpClient: HttpClient) {}

   findAll(): Observable<Persona[]> {
    return this.httpClient.get<Persona[]>(`${this.persUrl}`);
  }

  save(persona: Persona): Observable<Persona> {
    return this.httpClient.post<Persona>(this.persUrl +'nuevo', persona);
  }

  delete(id: number): Observable<void> {
    return this.httpClient.delete<void>(this.persUrl + `delete/${id}`);
  }

  update(id:number,persona:Persona): Observable<Persona> {
    return this.httpClient.put<Persona>(this.persUrl + `editar/${id}`, persona);
  }

  detail(id: number): Observable<Persona> {
    return this.httpClient.get<Persona>(this.persUrl + `${id}`);
  }
}

