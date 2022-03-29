import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../interfaces/User';
import { BackEndService } from '../services/backend.service';
import { ToasterService } from '../services/toaster.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  public user!: User;
  constructor(
    private backEndService: BackEndService,
    private toasterService: ToasterService
  ) {}

  ngOnInit(): void {
    this.user = localStorage.getItem('user')
      ? JSON.parse(localStorage.getItem('user') || '')
      : undefined;
  }

  updateUser() {
    if (this.user) {
      this.backEndService.updateUser(this.user).subscribe((data) => {
        if (data) {
          this.user = data;
          localStorage.setItem('user', JSON.stringify(data));
          this.toasterService.show(
            'User updated',
            this.user.firstName,
            'success'
          );
        }
      });
    }
  }
}
