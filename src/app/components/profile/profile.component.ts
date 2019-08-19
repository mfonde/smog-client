import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from '../../services/profile.service';
import { Review } from '../../models/review-model';
import { MovieData } from '../../models/MovieData';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

const smallUser = JSON.parse(localStorage.getItem('currentUser'))
// const smallId = JSON.parse(localStorage.getItem('currentFav'))

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {

  // public smallUserBaby = this.profileService.smallUser

  public bigUser = smallUser.user.username;
  public selectRanking: FormGroup;
  public selectRating: FormGroup;

  // isUserLoggedIn: boolean;
  updateTrue = false;
  bigReviews = [];
  bigFavorites = [];
  smallFavorites = '';
  bigName = this.bigUser;
  @Input() displayedMovie: MovieData;

  constructor(
    private profileService: ProfileService,
    // private userService: UserService,
    private form: FormBuilder,
    private router: Router
  ) {
    // this.userService.isUserLoggedIn.subscribe(value => {
    //   this.isUserLoggedIn = value;
    // });
    this.createForm();
  }

  ngOnInit() {
    this.profileService.getYourReview(this.bigUser).subscribe(data => {
      this.bigReviews = data, console.log(data);
    });
    this.profileService.getYourFavorites(this.bigUser).subscribe(data => {
      this.bigFavorites = data, console.log(data), localStorage.setItem('currentFav', JSON.stringify(this.bigFavorites));;
    })
    console.log(this.profileService.smallId)
  }

  createForm(): void {
    this.selectRanking = this.form.group(
      { ranking: new FormControl }
    )
    this.selectRating = this.form.group(
      { reviewText: new FormControl })
  }

  delete(id): void {
    this.movieBeGone(id);
    this.router.navigateByUrl('/#', { skipLocationChange: true }).then(() => this.router.navigate(['/profile']));
  }

  deleteReview(id): void {
    this.profileService.deleteYourReviews(id).subscribe();
    this.router.navigateByUrl('/#', { skipLocationChange: true }).then(() => this.router.navigate(['/profile']));
  }

  movieBeGone(id): void {
    this.profileService.destroyYourFavorites(id).subscribe();
  }

  update(id): void {
    this.serverUpdate(id);
    console.log('updated');
    this.router.navigateByUrl('/#', { skipLocationChange: true }).then(() => this.router.navigate(['/profile']));
  }

  serverUpdate(id): void {
    const ranking = this.selectRanking.value;
    console.log(id)
    console.log(typeof ranking)
    this.profileService.updateYourFavorites(id, ranking)
  }

  updateReview(id) {
    const reviewText = this.selectRating.value;
    console.log(this.selectRating.value)
    console.log(typeof reviewText)
    this.profileService.updateYourReviews(id, reviewText)
    location.reload();
  }

  updateOn() {
    this.updateTrue = true;
  }
}
