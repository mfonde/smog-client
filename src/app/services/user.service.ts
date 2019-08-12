import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';

const smog = 'http://localhost:3000'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public currentUser;
  public registeredUser;


  constructor(private http: HttpClient) { }

  headers = new HttpHeaders({
    'Content-Type': 'application/json',
  })

  register(user: User) {
    this.currentUser = new User(user)
    console.log(this.currentUser)
    console.log(user)
    return this.http.post(`${smog}/user/create/`, this.currentUser, { headers: this.headers }).subscribe(data => {
      this.registeredUser = data;
      console.log(this.registeredUser)
    })
    //! Need to have a subscribe if ever sending information.

  }

  delete() {
    // deletes user by the user id sent with the request
  }

  update() {
    // updates a user from the id sent with the request, or if the user is one of the admins they have access the all user crud
  }

}
