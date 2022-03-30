import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AlwaysAuthGuard implements CanActivate {
  constructor(private router: Router, private location: Location) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (
      (state.url === '/signup' && !localStorage.getItem('user')) ||
      (state.url !== '/signup' && localStorage.getItem('user'))
    ) {
      return true;
    } else if (state.url === '/signup' && localStorage.getItem('user')) {
      this.router.navigateByUrl('/post-list');
      return false;
    }
    this.router.navigateByUrl('/signup');
    return false;
  }
}
