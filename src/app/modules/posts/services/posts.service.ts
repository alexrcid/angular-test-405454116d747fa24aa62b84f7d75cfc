import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InterfacePost } from '../interfaces/interface-post'

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