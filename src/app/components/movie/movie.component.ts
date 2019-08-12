import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { DatabaseService } from 'src/app/services/database.service';
import { FavoriteService } from '../../services/favorite.service';
import { Favorite } from '../../models/favorite-model';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  favoriteSelected = false;
  favoriteAdded = false;
  public movie;
  public selectRanking: FormGroup;

  constructor(private databaseService: DatabaseService, private favoriteService: FavoriteService, private form: FormBuilder) {         this.getMovie();
    this.createForm();
  }

  createForm() {
    this.selectRanking = this.form.group({
      ranking: new FormControl
    })
  }

  getMovie() {
    this.movie = this.databaseService.movie;
  }

  onFavoriteSelected(){
    this.favoriteSelected = true;
  }

  favoriteClose() {
    this.favoriteSelected = false;
  }

addToFavorites() {
 const movieTitle = this.databaseService.movie.title;
 const imdbId = this.databaseService.movie.imdbID;
 const poster = this.databaseService.movie.poster;
 const ranking = this.selectRanking.value.ranking;

  const newFavorite = new Favorite(movieTitle, poster, imdbId, ranking);
  this.favoriteService.saveFavorite(newFavorite);
  console.log(this.databaseService.movie.title);
  console.log(ranking);
  console.log(newFavorite);
  this.favoriteClose();
  this.favoriteAdded = true;

}

  ngOnInit() {
    let x = this.databaseService.movie;
    console.log(x);
    // console.log(this.databaseService.movie.title);

  }


}
