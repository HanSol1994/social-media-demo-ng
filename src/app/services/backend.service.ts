import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpResponse,
} from '@angular/common/http';
import { UserList } from '../interfaces/UserList';
import { Observable, throwError } from 'rxjs';
import { PostList } from '../interfaces/PostList';
import { User } from '../interfaces/User';
import { CommentList } from '../interfaces/CommentList';
import { Comment } from '../interfaces/Comment';
import { AddCommentRequest } from '../interfaces/AddCommentRequest';
import { ToasterService } from './toaster.service';

import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class BackEndService {
  private _url = 'https://dummyapi.io/data/v1/';
  constructor(
    private _http: HttpClient,
    private toasterService: ToasterService
  ) {}

  headers = new HttpHeaders({
    'Content-Type': 'application/json; charset=utf-8',
    'app-id': '623fc2f087ce6b490b3189ca',
  });

  signup(user: User): Observable<any> {
    return this._http
      .post(this._url + 'user/create', user, {
        headers: this.headers,
      })
      .pipe(
        catchError((error) => {
          if (error.status === 400) {
            this.toasterService.show(
              'Signup failed',
              error.error.data.email,
              'error'
            );
          }
          return of(null);
        })
      );
  }

  addComment(addCommentRequest: AddCommentRequest): Observable<Comment> {
    return this._http.post<Comment>(
      this._url + 'comment/create',
      addCommentRequest,
      {
        headers: this.headers,
      }
    );
  }

  getPostList(id: string): Observable<any> {
    let url = 'post';
    if (id) {
      url = 'user/' + id + '/post';
    }
    return this._http.get<PostList>(this._url + url, {
      headers: this.headers,
    });
  }

  deletePost(id: string): Observable<any> {
    return this._http.delete(this._url + 'post/' + id, {
      headers: this.headers,
    });
  }

  getUserList(): Observable<UserList> {
    return this._http.get<UserList>(this._url + 'user', {
      headers: this.headers,
    });
  }

  getCommentListByPost(postId: string): Observable<CommentList> {
    return this._http.get<CommentList>(
      this._url + 'post/' + postId + '/comment',
      {
        headers: this.headers,
      }
    );
  }

  getUserFullData(id: string): Observable<User> {
    return this._http.get<User>(this._url + 'user/' + id, {
      headers: this.headers,
    });
  }

  updateUser(user: User): Observable<User> {
    return this._http.put<User>(this._url + 'user/' + user.id, user, {
      headers: this.headers,
    });
  }
}
