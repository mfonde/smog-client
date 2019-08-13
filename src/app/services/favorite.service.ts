import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Favorite } from '../models/favorite-model';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  public favorite;

  constructor(private http: HttpClient) { }

  token = JSON.parse(localStorage.getItem('sessionToken'));
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': this.token 
  })

  saveFavorite(favorite: Favorite) {
    const url = `http://localhost:3000/favorite/`;
    this.http.post<any>(url, favorite, {
      headers: this.headers
    }).subscribe(data => {
      this.favorite = data
    })
    console.log(favorite);
  }
}
