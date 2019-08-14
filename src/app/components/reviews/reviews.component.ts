import { Component, OnInit, Input } from '@angular/core';
import { Review } from '../../models/review-model';
import { ReviewService } from '../../services/review.service';
import { MovieData } from '../../models/MovieData';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css'],
  providers: [NgbRatingConfig]
})
export class ReviewsComponent implements OnInit {
  currentUser = JSON.parse(localStorage.getItem('currentUser'));
  public admin = this.currentUser.admin;
  reviews: Review[];
  @Input() displayedMovie: MovieData;
  @Input() searchName: string;
  

  getAllReviews(): void {
    this.reviewService.getAllReviews()
      .subscribe(reviews => this.reviews = reviews)
  }

  getReviewsByImdbID() {
    console.log(this.displayedMovie.imdbID)
    this.reviewService.getReviewsByImdbID(this.displayedMovie.imdbID)
    .subscribe(reviews => this.reviews = reviews)
  }

  constructor(private reviewService: ReviewService, config: NgbRatingConfig) { config.max = 5; config.readonly = true }
  getReviewsByUsername() {
    console.log(this.searchName);
    this.reviewService.getReviewsByUsername(this.searchName).subscribe(reviews => {
      console.log(reviews);
      this.reviews = reviews;
    })
  }

  ngOnInit() {
    if(this.displayedMovie){
      console.log(this.displayedMovie);
      this.getReviewsByImdbID()
    } 
    else if (this.searchName) {
      console.log(this.searchName);
      this.getReviewsByUsername()
    }
    else {
    this.getAllReviews()
    }
  }

}
