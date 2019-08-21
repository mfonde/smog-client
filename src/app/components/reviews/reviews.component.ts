import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Review } from '../../models/review-model';
import { ReviewService } from '../../services/review.service';
import { MovieData } from '../../models/MovieData';
import { BestiesService } from '../../services/besties.service';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css'],
  providers: [NgbRatingConfig]
})
export class ReviewsComponent implements OnInit {

  reviews: Review[];
  returnUrl: string;
  currentUser = JSON.parse(localStorage.getItem('currentUser'));

  @Input() displayedMovie: MovieData;
  @Input() searchName: string;
  @ViewChild('username', { static: false }) usernameRef: ElementRef;
  @Input() review: Review;
  @Input() adminOn;

  constructor(
    private reviewService: ReviewService,
    private config: NgbRatingConfig,
    private route: ActivatedRoute,
    private router: Router,
    private bestiesService: BestiesService
  ) {
    config.max = 5;
    config.readonly = true;
  }

  getAllReviews(): void {
    this.reviewService.getAllReviews()
      .subscribe(reviews => this.reviews = reviews)
  }

  getReviewsByImdbID() {
    this.reviewService.getReviewsByImdbID(this.displayedMovie.imdbID)
      .subscribe(reviews => this.reviews = reviews)
  }

  getReviewsByUsername() {
    this.reviewService.getReviewsByUsername(this.searchName)
      .subscribe(reviews => {
        this.reviews = reviews.slice(0, 20);
      })
  }
  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/besties';
    if (this.displayedMovie) {
      this.getReviewsByImdbID()
    } else if (this.searchName) {
      this.getReviewsByUsername()
    } else {
      this.getAllReviews()
    }
  }

}
