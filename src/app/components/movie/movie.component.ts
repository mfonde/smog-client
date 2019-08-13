import { Component, OnInit, ViewChild, ElementRef, Inject } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';
import { FavoriteService } from '../../services/favorite.service';
import { Favorite } from '../../models/favorite-model';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

export interface DialogData {
  movie: object;
}



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

  constructor(private databaseService: DatabaseService, private favoriteService: FavoriteService, private form: FormBuilder, public dialog: MatDialog) {this.getMovie();
    this.createForm();}


  openDialog(): void {
    const dialogRef = this.dialog.open(NewReviewDialog, {
      width: '800px',
      data: { movie: this.movie }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
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

@Component({
  selector: 'new-review-dialog',
  templateUrl: 'new-review-dialog.html',
})
export class NewReviewDialog {

  constructor(public dialogRef: MatDialogRef<NewReviewDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

    onNoClick(): void {
      this.dialogRef.close();
    }

}
