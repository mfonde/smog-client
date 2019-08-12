import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';

const smog = 'http://localhost:3000'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public currentUser;

  constructor(private http: HttpClient) { }

  headers = new HttpHeaders({
    'Content-Type': 'application/json',
  })

  register(user: User) {
    // this.currentUser = new User(user)
    // console.log(this.currentUser)
    return this.http.post(`${smog}/user/create/`, user, { headers: this.headers })

  }

  delete() {
    // deletes user by the user id sent with the request
  }

  update() {
    // updates a user from the id sent with the request, or if the user is one of the admins they have access the all user crud
  }

}
