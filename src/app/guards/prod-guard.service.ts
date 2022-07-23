import { trigger } from '@angular/animations';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { TokenService } from '../servicios/token.service';

@Injectable({
  providedIn: 'root'
})
export class ProdGuardService {
  realRol: string;

  constructor(
    private tokenService: TokenService,
    private router: Router
  ) { }
canActivate (route: ActivatedRouteSnapshot,state: RouterStateSnapshot): boolean {
  const expectedRol = route.data['expectedRol'];
  this.realRol = this.tokenService.isadmmin() ? 'admin' : 'user';

  if (!this.tokenService.isLogged() || expectedRol.indexOf(this.realRol)<0 ){
    this.router.navigate(['/']);
    return false;
  }
  return true;
}
}
