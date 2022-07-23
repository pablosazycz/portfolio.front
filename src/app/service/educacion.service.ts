import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Educacion } from '../models/educacion';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
eduUrl= environment.eduUrl;

  constructor(private httpClient: HttpClient) { }

  public detail(id: number): Observable<any> {
    return this.httpClient.get<any>(this.eduUrl );
}}

