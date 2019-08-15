import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  
  
  constructor(private http:HttpClient) { }
  
  
  token = JSON.parse(localStorage.getItem('sessionToken'));
  smallUser = JSON.parse(localStorage.getItem('currentUser'))
  smallId = JSON.parse(localStorage.getItem('currentFav'))
  public reviews: [];
  public bigUser = this.smallUser.user.username
  // public smallId = JSON.parse(localStorage.getItem('currentFav'))
  public bigId = this.smallId
  
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    "Authorization": `${this.token}`
  })
  
  getYourReview(middleUser){
    const url = `http://localhost:3000/review/username/${middleUser}/`
    console.log(this.smallUser)
    console.log(this.token)
    console.log(middleUser, "work")
      return this.http.get<any>(url,
        {headers: new HttpHeaders({
          'Content-Type': 'application/json',
          "Authorization": `${this.token}`
        })})
        // .subscribe(data =>{
        //    this.reviews = data, console.log(data)
        //})
  }

  getYourFavorites(middleUser){
    const url = `http://localhost:3000/favorite/username/${middleUser}`
    return this.http.get<any>(url,
      {headers: this.headers})
  }

  destroyYourFavorites(id){
    const url = `http://localhost:3000/favorite/delete/${id}`
    return this.http.delete<any>(url,
      {headers:this.headers})
  }

  updateYourFavorites(id, ranking){
    const url =`http://localhost:3000/favorite/update/${id}`
    console.log(id)
    console.log(ranking)
    return this.http.put<any>(url, ranking,
      {headers:this.headers})
  }
  
 
  }