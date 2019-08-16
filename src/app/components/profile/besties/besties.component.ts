import { Component, OnInit } from '@angular/core';
import { BestiesService } from '../../../services/besties.service';
import { ReviewService } from '../../../services/review.service';
import { Review } from '../../../models/review-model';

@Component({
  selector: 'app-besties',
  templateUrl: './besties.component.html',
  styleUrls: ['./besties.component.css'],
  providers: [BestiesService]
})
export class BestiesComponent implements OnInit {
  reviews: Review[];
  username

  constructor(
    private bestiesService: BestiesService, private reviewService: ReviewService
  ) {}

  ngOnInit() {
    this.reviews = (this.reviewService.reviews);
    this.username = this.reviews[0].username;
    console.log(this.reviews);
    console.log(this.username);
  }

}
