import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { PostList } from '../interfaces/PostList';
import { BackEndService } from '../services/backend.service';
import { Router } from '@angular/router';
import { ToasterService } from '../services/toaster.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent implements OnInit {
  public postList!: PostList;
  toasts: any[] = [];
  @Input()
  userId!: any;
  private state: any;

  constructor(
    private backEndService: BackEndService,
    private toasterService: ToasterService,
    private location: Location,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.state = this.location.getState();
    this.userId = this.state?.userId;
    this.backEndService.getPostList(this.userId).subscribe((data) => {
      this.postList = data;
    });
  }

  openUserDetails(id: any) {
    if (id) {
      this.router.navigateByUrl('/user', { state: { userId: id } });
    }
  }

  deletePost(index: number) {
    this.backEndService
      .deletePost(this.postList.data[index].id)
      .subscribe((data) => {
        if (data) {
          this.toasterService.show(
            'Post deleted',
            this.postList.data[index].text,
            'success'
          );
          this.postList.data.splice(index, 1);
        } else {
          this.toasterService.show(
            'Failed to delete post',
            this.postList.data[index].text,
            'success'
          );
        }
      });
  }
}
