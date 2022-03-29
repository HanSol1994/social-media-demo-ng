import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(public router: Router) {}
  public isMenuCollapsed: boolean = false;

  trackByFn(index: number, item: any) {
    return index;
  }

  logout() {
    localStorage.removeItem('user');
    this.router.navigateByUrl('/signup');
  }
}
