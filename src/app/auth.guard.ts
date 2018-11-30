import { Injectable, Input, Output, EventEmitter } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  @Input() estaLogado: boolean;
  @Output() emitLogado = new EventEmitter();

  constructor( private auth: AuthService, private route: Router ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      // atribui a variavel o valor se está logado ...
      this.estaLogado = this.auth.isLoggedIn();
      this.emitLogado.emit(this.estaLogado);

      if (this.estaLogado) {
        return true;
      } else {
        localStorage.setItem('lockUrl', state.url);
        this.route.navigate(['restrict']);
        return false;
      }
  }
}
