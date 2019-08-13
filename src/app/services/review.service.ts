import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NewReview } from '../models/post-review-model'

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(private http:HttpClient) { }

  // getInfo(url) {
  //   return this.http.get<any>(url)
  // }
  token = JSON.parse(localStorage.getItem('sessionToken'));
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
  })
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

  postReview(review: NewReview){
    const url = 'http://localhost:3000/review/';
    console.log(review)
    this.http.post(url, review, {
      headers: this.authHeaders
    }).subscribe(data => {
      console.log(data);
    })
  }

}
