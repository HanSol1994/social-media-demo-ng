import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AlwaysAuthGuard implements CanActivate {
  constructor(private router: Router, private location: Location) {}
  canActivate() {
    if (
      this.location.getState() !== '/sign-up' &&
      localStorage.getItem('user')
    ) {
      return true;
    } else if (
      this.location.getState() === '/sign-up' &&
      localStorage.getItem('user')
    ) {
      this.router.navigateByUrl('/post-list');
      return false;
    }
    this.router.navigateByUrl('/signup');
    return false;
  }
}
