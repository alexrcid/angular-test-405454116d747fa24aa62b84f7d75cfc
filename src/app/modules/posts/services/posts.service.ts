import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InterfacePost, InterfaceComment } from '../../models/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})

export class PostsService {

  apiURL: string = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getPosts(): any {
    return this.http.get<InterfacePost>(this.apiURL);
  }
}

export class CommentsService {

  apiURL: string = 'https://jsonplaceholder.typicode.com/comments';

  constructor(private http: HttpClient) { }

  getComments(): any {
    console.log(this.apiURL)
    return this.http.get<InterfaceComment>(this.apiURL);
  }
}
