import { Component, OnInit } from '@angular/core';
import { BackEndService } from '../services/backend.service';
import { User } from '../interfaces/User';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToasterService } from '../services/toaster.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  public user: User | undefined;
  constructor(
    private backEndService: BackEndService,
    private router: Router,
    private toasterService: ToasterService
  ) {}

  ngOnInit(): void {}

  signup(f: NgForm) {
    this.user = f.value;
    if (this.user) {
      this.backEndService.signup(this.user).subscribe((data: User) => {
        if (data) {
          this.toasterService.show('Welcom', data.firstName, 'success');
          const jsonData = JSON.stringify(data);
          localStorage.setItem('user', jsonData);
          this.router.navigateByUrl('/post-list');
        }
      });
    }
  }
}
