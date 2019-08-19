import { Component, OnInit, ViewChild, ElementRef, Inject } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';
import { FavoriteService } from '../../services/favorite.service';
import { ReviewService } from '../../services/review.service';
import { Favorite } from '../../models/favorite-model';
import { NewReview } from '../../models/post-review-model'
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';

export interface DialogData {
  movie: {
    title: string,
    poster: string,
    imdbID: string
  };
}

export interface FavoriteData {
  movie: {
    title: string,
    poster: string,
    imdbID: string
  }
}

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  // favoriteSelected = false;
  favoriteAdded = false;
  public movie;
  public selectRanking: FormGroup;

  constructor(
    private databaseService: DatabaseService,
    private favoriteService: FavoriteService,
    private form: FormBuilder,
    public dialog: MatDialog,
    private router: Router
  ) {
    this.getMovie();
    this.createForm();
  }


  openDialog(): void {
    const dialogRef = this.dialog.open(NewReviewDialog, {
      width: '600px',
      data: { movie: this.movie }
    });
    dialogRef.afterClosed().subscribe(result => {
      // console.log('The dialog was closed');
    });
  }
  createForm() {
    this.selectRanking = this.form.group({
      ranking: new FormControl
    })
  }

  getMovie() {
    // check to see if local storage is set with the current searched 
    if (localStorage.getItem('movie') === null) {
      this.movie = this.databaseService.movie;
      // console.log(this.movie)
    } else {
      this.movie = JSON.parse(localStorage.getItem('movie'));
    }

  }

  onFavoriteSelected(): void {
    const dialogRef = this.dialog.open(FavoriteDialog, {
      width: '600px',
      data: {movie: this.movie}
    });
    dialogRef.afterClosed().subscribe(result => {console.log('The dialog was closed')})
  }

  // favoriteClose() {
  //   this.favoriteSelected = false;
  // }

  addToFavorites() {
    const movieTitle = this.databaseService.movie.title;
    const imdbId = this.databaseService.movie.imdbID;
    const poster = this.databaseService.movie.poster;
    const ranking = this.selectRanking.value.ranking;

    const newFavorite = new Favorite(movieTitle, poster, imdbId, ranking);
    this.favoriteService.saveFavorite(newFavorite);
    // console.log(this.databaseService.movie.title);
    // console.log(ranking);
    // console.log(newFavorite);
    // this.favoriteClose();
    this.favoriteAdded = true;
    this.router.navigateByUrl('/#', { skipLocationChange: true }).then(() => this.router.navigate(['/movie']));
  }

  ngOnInit() {
    let x = this.databaseService.movie;
    // console.log(x);
  }
}

@Component({
  selector: 'new-review-dialog',
  templateUrl: 'new-review-dialog.html',
  styleUrls: ['./new-review-dialog.css']
})
export class NewReviewDialog {

  public reviewData: FormGroup;

  currentRate = 1;

  constructor(
    public dialogRef: MatDialogRef<NewReviewDialog>,
    private form: FormBuilder,
    private reviewService: ReviewService,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    this.reviewForm()
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  reviewForm() {
    this.reviewData = this.form.group({
      reviewValue: new FormControl,
      reviewText: new FormControl
    })
  }

  refresh() {
    // console.log('refreshing');
    this.router.navigateByUrl('/#', { skipLocationChange: true }).then(() => this.router.navigate(['/movie']));
  }

  saveReview() {
    const movieTitle = this.data.movie.title;
    const poster = this.data.movie.poster;
    const imdbId = this.data.movie.imdbID;
    const reviewRating = this.currentRate;
    const reviewText = this.reviewData.value.reviewText;
    const newReview = new NewReview(movieTitle, poster, imdbId, reviewRating, reviewText);
    this.reviewService.postReview(newReview);
    // console.log(newReview)
    this.dialogRef.close();
    this.refresh();


  }
}

@Component({
  selector: 'favorite-dialog',
  templateUrl: 'favorite-dialog.html',
  styleUrls: ['./favorite-dialog.css']
})
export class FavoriteDialog {

  public selectRanking: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<FavoriteDialog>,
    private form: FormBuilder,
    private favoriteService: FavoriteService,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public favoriteData: FavoriteData
  ){
    this.favoriteForm()
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  favoriteForm() {
    this.selectRanking = this.form.group({
      ranking: new FormControl
    })
  }

  refresh() {
    this.router.navigateByUrl('#', { skipLocationChange: true }).then(() => this.router.navigate(['/movie']));
  }

  addToFavorites() {
    const movieTitle = this.favoriteData.movie.title;
    const poster = this.favoriteData.movie.poster;
    const imdbId = this.favoriteData.movie.imdbID;
    const ranking = this.selectRanking.value.ranking;

    const newFavorite = new Favorite(movieTitle, poster, imdbId, ranking);
    this.favoriteService.saveFavorite(newFavorite);
    this.dialogRef.close();
    this.refresh();
  }

}
