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
  public searchedUser;

  bigCurrentUser = JSON.parse(localStorage.getItem('currentUser'));
  public userId = this.bigCurrentUser.user.id;

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
    console.log(this.currentUser)
    console.log(user)
    return this.http.post(`${smog}/user/create/`, this.currentUser, { headers: this.headers }).subscribe(data => {
      this.registeredUser = data;
      console.log(this.registeredUser)
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
    // .subscribe(data => {
    //   this.searchedUser = data;
    //   console.log(data);
    // })
    
  }

  delete() {
    // deletes user by the user id sent with the request
  }

  update(userUpdate) {
    const id = this.userId;
    console.log(id);
    const url = `${smog}/user/update/${id}`
    return this.http.put(url, userUpdate, {
      headers: this.authHeaders
    })
    // updates a user from the id sent with the request, or if the user is one of the admins they have access the all user crud
  }

}
