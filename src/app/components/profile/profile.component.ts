import { Component, OnInit, Input } from '@angular/core';
import { ProfileService } from '../../services/profile.service'
import { Review } from '../../models/review-model';
import { MovieData } from '../../models/MovieData';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';


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

  bigReviews = [];
  bigFavorites = [];
  smallFavorites = '';
  bigName = this.bigUser;
  @Input() displayedMovie: MovieData;


  constructor(private profileService: ProfileService, private form: FormBuilder) { this.createForm(); }

  updateTrue = false;

  createForm() {
    this.selectRanking = this.form.group(
      { ranking: new FormControl }
    )
  }

  delete(id): void {
    this.profileService.destroyYourFavorites(id).subscribe();
    location.reload();
  }

  update(id) {
    const ranking = this.selectRanking.value;
    console.log(id)
    console.log(typeof ranking)

    this.profileService.updateYourFavorites(id, ranking)
    // .subscribe(data => {
    // console.log(data)
    // });
    location.reload();

  }

  updateOn() {
    this.updateTrue = true;
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

}

