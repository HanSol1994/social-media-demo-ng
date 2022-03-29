import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { BackEndService } from '../services/backend.service';
import { User } from '../interfaces/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  public user!: User;
  public userId!: string;
  private state: any;

  constructor(
    private backEndService: BackEndService,
    private location: Location,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.state = this.location.getState();
    this.userId = this.state?.userId;
    if (!this.userId) {
      this.router.navigateByUrl('/post-list');
      return;
    }
    this.backEndService.getUserFullData(this.userId).subscribe((data) => {
      this.user = data;
    });
  }
}
