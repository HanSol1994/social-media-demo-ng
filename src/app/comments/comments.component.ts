import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { CommentList } from '../interfaces/CommentList';
import { Comment } from '../interfaces/Comment';
import { BackEndService } from '../services/backend.service';
import { ToasterService } from '../services/toaster.service';
import { NgForm } from '@angular/forms';
import { AddCommentRequest } from '../interfaces/AddCommentRequest';
import { Post } from '../interfaces/Post';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent implements OnInit {
  public commentList!: CommentList;
  public firstComment!: Comment;
  public currentUserId: string | undefined;
  public message: string = '';
  @Input()
  post!: Post;
  private state: any;
  constructor(
    private backEndService: BackEndService,
    private location: Location,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.state = this.location.getState();
    this.currentUserId = JSON.parse(localStorage.getItem('user') || '')?.id;
    if (this.post?.id) {
      this.backEndService
        .getCommentListByPost(this.post?.id)
        .subscribe((data: CommentList) => {
          this.firstComment = data.data[0];
          this.commentList = data;
          this.commentList.data.splice(0, 1);
        });
    }
  }

  openUserDetails(id: any) {
    if (id) {
      this.router.navigateByUrl('/user', { state: { userId: id } });
    }
  }

  addComment() {
    if (this.message && this.currentUserId) {
      let addCommentRequest: AddCommentRequest = {
        post: this.post?.id,
        message: this.message || '',
        owner: this.currentUserId || '',
      };
      this.backEndService
        .addComment(addCommentRequest)
        .subscribe((data: Comment) => {
          if (data) {
            this.message = '';
            if (this.firstComment) {
              this.commentList.data.unshift(
                JSON.parse(JSON.stringify(this.firstComment))
              );
            } else {
              this.commentList = {} as CommentList;
              this.commentList.data = [];
            }
            this.firstComment = data;
          }
        });
    }
  }
}
