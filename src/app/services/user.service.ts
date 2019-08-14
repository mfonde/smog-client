import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';

const smog = 'http://localhost:3000'
const bigCurrentUser = JSON.parse(localStorage.getItem('currentUser'));

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public currentUser;
  public registeredUser;
  public searchedUser;
  public searchedUserID;

  // public userId = bigCurrentUser.user.id;

  constructor(private http: HttpClient) {
    console.log(bigCurrentUser)
  }

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
    console.log(this.currentUser)
    console.log(user)
    return this.http.post(`${smog}/user/create/`, this.currentUser, { headers: this.headers }).subscribe(data => {
      this.registeredUser = data;
      console.log(this.registeredUser)
    })
    //! Need to have a subscribe if ever sending information.

  }

  get(searchName) {
    console.log(searchName.value);
    const url = `${smog}/user/username/${searchName.value}`
    return this.http.get<any>(url, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': this.token
      }
    }).subscribe(data => {
      this.searchedUserID = data;
      console.log(this.searchedUserID)

    })
    // .subscribe(data => {
    //   this.searchedUser = data;
    //   console.log(data);
    // })

  }

  delete() {
    // deletes user by the user id sent with the request
  }

  update(userUpdate) {
    const id = bigCurrentUser.user.id;
    console.log(id);
    const url = `${smog}/user/update/${id}`
    localStorage.removeItem('currentUser');
    return this.http.put(url, userUpdate, {
      headers: this.authHeaders
    })
    // updates a user from the id sent with the request, or if the user is one of the admins they have access the all user crud
  }

}
