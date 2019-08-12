import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Favorite } from '../models/favorite-model';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  public favorite;

  constructor(private http: HttpClient) { }

  headers = new HttpHeaders({
    'Content-Type': 'application/json'
  })

  saveFavorite(favorite: Favorite) {
    const url = `http://localhost:3000/favorite/`;
    this.http.post(url, favorite, {
      headers: this.headers
    }).subscribe(data => {
      console.log(data);
    })
    console.log(favorite);
  }
}
