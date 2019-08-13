import { Component, OnInit, Input } from '@angular/core';
import { ProfileService } from '../../services/profile.service'
import { Review } from '../../models/review-model';
import { MovieData } from '../../models/MovieData'


const smallUser = JSON.parse(localStorage.getItem('currentUser'))
const bigUser = smallUser.user.username

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {

  // public smallUserBaby = this.profileService.smallUser

  bigReviews = [];
  @Input() displayedMovie: MovieData;

  constructor(private profileService: ProfileService) { }


  ngOnInit() {
    // const bigUserBaby = this.profileService.bigUser
    // this.bigReviews.push(this.profileService.getYourReview());
    // console.log(this.bigReviews)
    this.profileService.getYourReview(bigUser).subscribe(data =>{
        this.bigReviews = data, console.log(data)
      });
  }

}