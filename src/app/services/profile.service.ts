import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const token = JSON.parse(localStorage.getItem('sessionToken'));
const smallUser = JSON.parse(localStorage.getItem('currentUser'))


@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  
  
  constructor(private http:HttpClient) { }
  

  public reviews: [];
  public bigUser = smallUser.user.username
  public smallUser = JSON.parse(localStorage.getItem('currentUser'))
  
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    "Authorization": `${token}`
  })
  
  getYourReview(middleUser){
    const url = `http://localhost:3000/review/username/${middleUser}`
    console.log(smallUser)
    console.log(token)
    console.log(middleUser, "work")
      return this.http.get<any>(url,
        {headers: this.headers})
        // .subscribe(data =>{
        //    this.reviews = data, console.log(data)
        //})
  }
  
  
 
  }