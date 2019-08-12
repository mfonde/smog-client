import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http:HttpClient) { }

  headers = new HttpHeaders({
    'Content-Type': 'application/json',
  })
  
// getYourReviews() {
//   const url = `http://localhost:3000/review/username/${currentUser.username}`
//   return this.http.get<any>(url,
//     {headers:this.headers
//     })
//   }
  }