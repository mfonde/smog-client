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

  token = JSON.parse(localStorage.getItem('sessionToken'));
  authHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': this.token
  })

  getAllReviews() {
    const url = "http://localhost:3000/review/getall";
    return this.http.get<any>(url, 
      {headers:this.headers
    })
  }

  getReviewsByImdbID(imdbID) {
    const url = `http://localhost:3000/review/imdbid/${imdbID}`;
    return this.http.get<any>(url,
      {headers: this.headers
    })
  }

  getReviewsByUsername(searchName) {
    const url = `http://localhost:3000/review/username/${searchName}`;
    return this.http.get<any>(url, {
      headers: this.authHeaders
    })
  }
}



