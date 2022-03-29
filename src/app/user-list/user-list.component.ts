import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../interfaces/User';
import { UserList } from '../interfaces/UserList';
import { BackEndService } from '../services/backend.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  public userList!: UserList;

  constructor(private backendService: BackEndService, private router: Router) {}
  ngOnInit(): void {
    this.backendService.getUserList().subscribe((data) => {
      this.userList = data;
    });
  }

  openUserDetails(id: string) {
    this.router.navigateByUrl('/user', { state: { userId: id } });
  }
}
