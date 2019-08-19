import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MovieData } from '../models/MovieData';


@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  public movie

  constructor(private http: HttpClient) { }

  getMovieInfo(search, cb: Function) {
    const url = `http://www.omdbapi.com/?apikey=3b64a161&t=${search}`;
    return this.http.get(url).subscribe(data => {
      this.movie = new MovieData(data);
      console.log(this.movie);
      localStorage.setItem('movie', JSON.stringify(this.movie))
      cb();
    })
  }
}