import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private route: Router ) { }

  sendToken(token: string) {
    return localStorage.setItem('LoggedInUser', token);
  }

  getToken() {
    return localStorage.getItem('LoggedInUser');
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  logout() {
    localStorage.removeItem('LoggedInUser');
    this.route.navigate(['home']);
  }
}
