import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NewReview } from '../models/post-review-model'
import { Review } from '../models/review-model';
import {  APIURL } from '../../environments/environment.prod';

const smog = `${APIURL}`

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  public reviews: Review[];
  public movieReviews: object[];

  constructor(private http: HttpClient) { }

  token = JSON.parse(localStorage.getItem('sessionToken'));
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
  })
  authHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': this.token
  })

  getAllReviews() {
    const url = `${smog}/review/getall`;
    return this.http.get<any>(url,
      { headers: this.headers })
  }

  getReviewsByImdbID(imdbID) {
    const url = `${smog}/review/imdbid/${imdbID}`;
    return this.http.get<any>(url,
      {
        headers: this.headers
      })
  }

  getReviewsByUsername(searchName) {
    const url = `${smog}/review/username/${searchName}`;
    console.log(searchName);
    return this.http.get<any>(url, {
      headers: this.authHeaders
    })
  }

  getReviewsByUsernameCallback(searchName, cb: Function) {
    const url = `${smog}/review/username/${searchName}`;
    console.log(searchName);
    return this.http.get<any>(url, {
      headers: this.authHeaders
    }).subscribe(reviews => {
      this.reviews = reviews;
      console.log(reviews);
      cb();
    })
  }

  postReview(review: NewReview) {
    const url = `${smog}/review/`;
    console.log(review)
    this.http.post(url, review, {
      headers: this.authHeaders
    }).subscribe(data => {
      console.log(data);
    })
  }

  deleteReview(id) {
    const url = `${smog}/review/delete/${id}`;
    console.log(url);
    return this.http.delete<any>(url, {
      headers: this.authHeaders
    })
  }

}



