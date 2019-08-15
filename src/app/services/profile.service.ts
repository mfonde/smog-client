import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

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
    const url = `http://localhost:3000/review/username/${middleUser}`
    console.log(smallUser)
    console.log(token)
    console.log(middleUser, "work")
    return this.http.get<any>(url,
      { headers: this.headers })
    // .subscribe(data =>{
    //    this.reviews = data, console.log(data)
    //})
  }

  getYourFavorites(middleUser) {
    const url = `http://localhost:3000/favorite/username/${middleUser}`
    return this.http.get<any>(url,
      { headers: this.headers })
  }

  destroyYourFavorites(id) {
    const url = `http://localhost:3000/favorite/delete/${id}`
    return this.http.delete<any>(url,
      { headers: this.headers })
  }

  updateYourFavorites(id, ranking) {
    const url = `http://localhost:3000/favorite/update/${id}`
    console.log(id)
    console.log(ranking)
    return this.http.put<any>(url, ranking,
      { headers: this.headers }).subscribe(updatedFav => {
        this.favreview = updatedFav;
        console.log(this.favreview)
      })
  }

  deleteYourReviews(id) {
    const url = `http://localhost:3000/review/delete/${id}`
    console.log('your review was deleted')
    return this.http.delete<any>(url,
      {headers:this.headers})
  }

  updateYourReviews(id, reviewText){
    const url=`http://localhost:3000/review/update/${id}`
    console.log('Your review was updated')
    return this.http.put<any>(url, reviewText,
      {headers: this.headers}).subscribe(updatedRev => {
        this.revreview = updatedRev;
        console.log(this.revreview)
      })
  }

}