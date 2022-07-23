import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../auth/login.component';
import { TokenService } from '../servicios/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  isLogged = false;

  constructor(private tokenService: TokenService) {}

  ngOnInit() {
   this.isLogged = this.tokenService.isLogged();
  }

  onLogOut(): void {
    this.tokenService.logOut();
   
  
  }
}
