import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';
import { BehaviorSubject } from 'rxjs';
import {  APIURL } from '../../environments/environment.prod';

const smog = `${APIURL}`

const bigCurrentUser = JSON.parse(localStorage.getItem('currentUser'));

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public currentUser;
  public registeredUser;
  public searchedUser;
  public isUserLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) { }

  headers = new HttpHeaders({
    'Content-Type': 'application/json',
  })
  token = JSON.parse(localStorage.getItem('sessionToken'));
  authHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': this.token
  })

  register(user: User) {
    this.currentUser = new User(user)
    // console.log(this.currentUser)
    // console.log(user)
    return this.http.post(`${smog}/user/create/`, this.currentUser, { headers: this.headers }).subscribe(data => {
      this.registeredUser = data;
      // console.log(this.registeredUser)
    })
    //! Need to have a subscribe if ever sending information.

  }

  get(searchName) {
    console.log(searchName);
    const url = `${smog}/user/username/${searchName}`
    return this.http.get<any>(url, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': this.token
      }
    })
  }

  delete(id) {
    // deletes user by the user id sent with the request
    const url = `${smog}/user/delete/${id}`

    return this.http.delete<any>(url, {
      headers: this.authHeaders
    }).subscribe(data => {
      console.log(data)
    })
  }

  update(userUpdate) {
    // const id = this.userId;
    // console.log(id);
    const url = `${smog}/user/update/${userUpdate.id}`
    // console.log(url);
    // console.log(userUpdate);
    return this.http.put<any>(url, userUpdate, {
      headers: this.authHeaders
    }).subscribe(data => {
      console.log(data)
    })
    // updates a user from the id sent with the request, or if the user is one of the admins they have access the all user crud
  }

}
