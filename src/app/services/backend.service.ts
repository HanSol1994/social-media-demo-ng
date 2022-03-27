import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { UserList } from '../interfaces/UserList';
import { Observable } from 'rxjs';
import { PostList } from '../interfaces/PostList';

@Injectable()
export class BackEndService {
  private _url = 'https://dummyapi.io/data/v1/';
  constructor(private _http: HttpClient) {}

  headers = new HttpHeaders({
    'Content-Type': 'application/json; charset=utf-8',
    'app-id': '623fc2f087ce6b490b3189ca',
  });

  getPostList(): Observable<any> {
    return this._http.get<PostList>(this._url + 'post', {
      headers: this.headers,
    });
  }

  getPostListByUser(id: string): Observable<any> {
    return this._http.get<PostList>(this._url + 'user/' + id + '/post', {
      headers: this.headers,
    });
  }

  getUserList(): Observable<UserList> {
    return this._http.get<UserList>(this._url + 'user', {
      headers: this.headers,
    });
  }

  post(url: string, data: any) {
    return this._http.post(this._url + url, data, { headers: this.headers });
  }

  put(url: string, data: any) {
    return this._http.put(this._url + url, data, { headers: this.headers });
  }

  delete(url: string) {
    return this._http.delete(this._url + url, { headers: this.headers });
  }
}
