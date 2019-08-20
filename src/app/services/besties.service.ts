import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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

