import { Component, OnInit } from '@angular/core';
import { Review } from '../../models/review-model'
import { ReviewService } from '../../services/review.service'

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  reviews: Review[];

  getAllReviews(): void {
    this.reviewService.getAllReviews()
      .subscribe(reviews => this.reviews = reviews)
  }

  constructor(private reviewService: ReviewService) { }

  ngOnInit() {
    this.getAllReviews()
  }

}
