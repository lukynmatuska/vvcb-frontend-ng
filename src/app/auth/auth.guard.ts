import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

export class AuthGuard implements CanActivate {
  constructor(private readonly authService: AuthService, private readonly router: Router){}

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(!this.authService.isLoggedIn()){
      return this.router.parseUrl("/login");
    }
    return true;
  }
  
}
