import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InterfaceUser } from '../../models/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  apiURL: string = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  getUsers(): any {
    return this.http.get<InterfaceUser>(this.apiURL);
  }

  newUser(user: {}): void {
    this.http.post(this.apiURL, user)
    .subscribe((response: {}) => {
      alert("The user it's created")
    });
  }
}
