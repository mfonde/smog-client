<<<<<<< HEAD
import { Component, OnInit, Input } from '@angular/core';
import { Review } from '../../models/review-model'
import { ReviewService } from '../../services/review.service'

import { MovieData } from '../../models/MovieData';

=======
import { Component, OnInit } from '@angular/core';
import { Review } from '../../models/review-model'
import { ReviewService } from '../../services/review.service'

>>>>>>> ae4838982faa5eca7ddf3b2fc37a2d2452deebc9
@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  reviews: Review[];
<<<<<<< HEAD
  @Input() displayedMovie: MovieData;
  
=======
>>>>>>> ae4838982faa5eca7ddf3b2fc37a2d2452deebc9

  getAllReviews(): void {
    this.reviewService.getAllReviews()
      .subscribe(reviews => this.reviews = reviews)
  }

<<<<<<< HEAD
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
=======
  constructor(private reviewService: ReviewService) { }

  ngOnInit() {
    this.getAllReviews()
>>>>>>> ae4838982faa5eca7ddf3b2fc37a2d2452deebc9
  }

}
