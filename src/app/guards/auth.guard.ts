import { Injectable } from '@angular/core';
import { CanActivate,
         ActivatedRouteSnapshot,
         RouterStateSnapshot, 
         Router} from '@angular/router';

@Injectable()
export class CanActivateRouteGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      const isLogged = localStorage.getItem('userLogged');
      if (isLogged) {
          return true;
      } else {
          this.router.navigate(['login']);
           return false;
      }
  }
}