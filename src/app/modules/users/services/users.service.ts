import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InterfaceUser } from '../../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  apiURL: string = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  getUsers(): any {
    return this.http.get<InterfaceUser>(this.apiURL);
  }
}
