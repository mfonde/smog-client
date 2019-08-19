import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { User } from '../models/user'
// import {  APIURL } from '../helpers/environment';

const smog = `http://localhost:3000`

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  headers = new HttpHeaders({
    'Content-Type': 'application/json',
  })

  login(babybaby) {
    return this.http.post<any>(`${smog}/user/login/`, babybaby, { headers: this.headers }).subscribe(user => {
      if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        localStorage.setItem('sessionToken', JSON.stringify(user.sessionToken));
        console.log('Current User');
        console.log(this.currentUser);
        this.currentUserSubject.next(user);
        location.reload();
      } else {
        console.log('failed login attempt');
      }
      return user
      // try to subscribe instead of map and then check verification
    })
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    localStorage.removeItem('sessionToken');
    // sets the current type of data of currentUser to null
    this.currentUserSubject.next(null);
  }
}
