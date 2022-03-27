import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { PostList } from '../interfaces/PostList';
import { BackEndService } from '../services/backend.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent implements OnInit {
  public postList!: PostList;
  private state: any;

  constructor(
    private backEndService: BackEndService,
    private location: Location
  ) {}

  ngOnInit(): void {
    console.log('here');
    this.state = this.location.getState();
    console.log(this.state);
  }
}
