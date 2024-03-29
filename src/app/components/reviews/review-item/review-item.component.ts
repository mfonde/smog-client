import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Review } from 'src/app/models/review-model';
import { ActivatedRoute, Router } from '@angular/router';
import { ReviewService } from '../../../services/review.service';
import { BestiesService } from '../../../services/besties.service';
import { ReviewData } from '../../../models/ReviewData'

@Component({
  selector: 'app-review-item',
  templateUrl: './review-item.component.html',
  styleUrls: ['./review-item.component.css']
})
export class ReviewItemComponent implements OnInit {
  @Input() review: ReviewData;
  @Input() adminOn;
  @ViewChild('username', { static: false }) usernameRef: ElementRef;
  returnUrl: string;

  constructor(private route: ActivatedRoute,
    private router: Router, private reviewService: ReviewService) { }

  showUserProfile() {
    const username = this.usernameRef.nativeElement.innerHTML;
    this.reviewService.getReviewsByUsernameCallback(username, () => {
      this.router.navigate([this.returnUrl])
    });
  }

  onDelete(id) {
    this.reviewService.deleteReview(id).subscribe();
    this.router.navigateByUrl('/#', { skipLocationChange: true });
  }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/besties';
  }

}
