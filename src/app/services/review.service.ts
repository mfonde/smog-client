import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NewReview } from '../models/post-review-model'
import { Review } from '../models/review-model';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  public reviews: Review[];

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

  getReviewsByUsername(searchName) {
    const url = `http://localhost:3000/review/username/${searchName}`;
    console.log(searchName);
    return this.http.get<any>(url, {
      headers: this.authHeaders
    })
  }

  getReviewsByUsernameCallback(searchName, cb: Function) {
    const url = `http://localhost:3000/review/username/${searchName}`;
    console.log(searchName);
    return this.http.get<any>(url, {
      headers: this.authHeaders
    }).subscribe(reviews => {
      this.reviews = reviews;
      console.log(reviews);
      cb();
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

  deleteReview(id) {
    const url = `http://localhost:3000/review/delete/${id}`;
    console.log(url);
    return this.http.delete<any>(url, {
      headers: this.authHeaders
    })
  }

}



