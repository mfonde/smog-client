import { Component, OnInit, Input } from '@angular/core';
import { Review } from '../../models/review-model'
import { ReviewService } from '../../services/review.service'

import { MovieData } from '../../models/MovieData';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  reviews: Review[];
  @Input() displayedMovie: MovieData;
  

  getAllReviews(): void {
    this.reviewService.getAllReviews()
      .subscribe(reviews => this.reviews = reviews)
  }

  getReviewsByImdbID() {
    console.log(this.displayedMovie.imdbID)
    this.reviewService.getReviewsByImdbID(this.displayedMovie.imdbID)
    .subscribe(reviews => this.reviews = reviews)
  }

  constructor(private reviewService: ReviewService) { }

  ngOnInit() {
    if(this.displayedMovie){
      this.getReviewsByImdbID()
    } else {
    this.getAllReviews()
    }
  }

}
