import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AutenticacionService } from './autenticacion.service';
import { Token } from '@angular/compiler';

@Injectable({
  providedIn: 'root',
})
export class InterceptorService implements HttpInterceptor {
  constructor(private autenticacionServicio: AutenticacionService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    var currentUser = this.autenticacionServicio.UsuarioAutenticado;
    if (currentUser && currentUser.accessToken) {
      req = req.clone({
        headers: req.headers.set('Authorization','Bearer '+ currentUser.accessToken)});
      return next.handle(req);
    }
    console.log("interceptor anda " + JSON.stringify(currentUser))
    return next.handle(req);
  }
}
