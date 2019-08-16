import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Review } from 'src/app/models/review-model';
import { ActivatedRoute, Router } from '@angular/router';
import { ReviewService } from '../../../services/review.service';
import { BestiesService } from '../../../services/besties.service';

// import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-review-item',
  templateUrl: './review-item.component.html',
  styleUrls: ['./review-item.component.css']
})
export class ReviewItemComponent implements OnInit {
  @Input() review: Review;
  @ViewChild('username', {static:false}) usernameRef: ElementRef;
  returnUrl: string;

  constructor(private route: ActivatedRoute,
    private router: Router, private reviewService: ReviewService) { }

  showUserProfile() {
    const username = this.usernameRef.nativeElement.innerHTML;
    console.log(username);
    
    this.reviewService.getReviewsByUsernameCallback(username, () => {
      this.router.navigate([this.returnUrl])
    });
  }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/besties';
  }

}
