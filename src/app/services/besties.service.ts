import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';


const smog = 'http://localhost:3000'


@Injectable({
  providedIn: 'root'
})
export class BestiesService {

  public user
  public username

  constructor(private http: HttpClient) { }
  token = JSON.parse(localStorage.getItem('sessionToken'));


  bestieSelected(name, cb: Function){
    this.username = `${name}`;
    console.log(this.username);

    return ((this.username), cb())
    }
    
  }

  // get(name) {
  //   console.log(name);
  //   const url = `${smog}/user/username/${name}`
  //   return this.http.get<any>(url, {
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Authorization': this.token
  //     }
  //   }).subscribe(data => {
  //     this.user = new User(data);
  //     console.log(this.user);
  //   })
  // }
// }
