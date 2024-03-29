import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {  APIURL } from '../../environments/environment.prod';

const smog = `${APIURL}`;

const token = JSON.parse(localStorage.getItem('sessionToken'));
const smallUser = JSON.parse(localStorage.getItem('currentUser'))
const smallId = JSON.parse(localStorage.getItem('currentFav'))

@Injectable({
  providedIn: 'root'
})

export class ProfileService {

  constructor(private http: HttpClient) { }

  public reviews: [];
  public bigUser = smallUser.user.username
  public smallId = JSON.parse(localStorage.getItem('currentFav'))
  public bigId = smallId
  public favreview;
  public revreview;

  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `${token}`
  })

  getYourReview(middleUser) {
    const url = `${smog}/review/username/${middleUser}`;
    return this.http.get<any>(url,
      { headers: this.headers });
  }

  getYourFavorites(middleUser) {
    const url = `${smog}/favorite/username/${middleUser}`;
    return this.http.get<any>(url,
      { headers: this.headers });
  }

  destroyYourFavorites(id) {
    const url = `${smog}/favorite/delete/${id}`;
    return this.http.delete<any>(url,
      { headers: this.headers });
  }

  updateYourFavorites(id, ranking) {
    const url = `${smog}/favorite/update/${id}`
    console.log(id)
    console.log(ranking)
    return this.http.put<any>(url, ranking,
      { headers: this.headers }).subscribe(updatedFav => {
        this.favreview = updatedFav;
        console.log(this.favreview)
      })
  }

  deleteYourReviews(id) {
    const url = `${smog}/review/delete/${id}`
    console.log('your review was deleted')
    return this.http.delete<any>(url,
      { headers: this.headers })
  }

  updateYourReviews(id, updatedReview) {
    const url = `${smog}/review/update/${id}`
    console.log('Your review was updated')
    return this.http.put<any>(url, updatedReview, { headers: this.headers }).subscribe(updatedRev => {
      this.revreview = updatedRev;
      console.log(this.revreview)
    })
  }

  updateYourRatings(id, reviewRatings){
    const url=`${smog}/review/update/${id}`
    console.log('Your review was updated')
    return this.http.put<any>(url, reviewRatings,
      { headers: this.headers }).subscribe(updatedRev => {
        this.revreview = updatedRev;
        console.log(this.revreview)
      })
  }

}