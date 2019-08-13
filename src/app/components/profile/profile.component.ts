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
  bigFavorites = [];
  bigName = bigUser;
  @Input() displayedMovie: MovieData;

  constructor(private profileService: ProfileService) { }


  ngOnInit() {
    this.profileService.getYourReview(bigUser).subscribe(data =>{
        this.bigReviews = data, console.log(data);
      });
    
    this.profileService.getYourFavorites(bigUser).subscribe(data =>{
      this.bigFavorites = data, console.log(data);
    })
  }

}