import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(private http:HttpClient) { }

  // getInfo(url) {
  //   return this.http.get<any>(url)
  // }
   headers = new HttpHeaders({
    'Content-Type': 'application/json',
  })

  getAllReviews() {
    const url = "http://localhost:3000/review/getall";
    return this.http.get<any>(url, 
      {headers:this.headers
    })
  }

}
