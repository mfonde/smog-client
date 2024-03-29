import { Component, OnInit, Input, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from '../../services/profile.service';
import { Review } from '../../models/review-model';
import { MovieData } from '../../models/MovieData';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { NgbRatingConfig, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap'
import { Favorite } from 'src/app/models/favorite-model';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogueData {
  id: number;
  ranking: number;
}

export interface ReviewData {
  id: number;
  reviewText: string;
  reviewRating: number;
}



const smallUser = JSON.parse(localStorage.getItem('currentUser'))
// const smallId = JSON.parse(localStorage.getItem('currentFav'))

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {

  public bigUser = smallUser.user.username;
  public bigData = smallUser.user.profilePic;
  public selectRanking: FormGroup;
  public selectRating: FormGroup;
  public selectStars: FormGroup;

  updateTrue = false;
  bigReviews = [];
  bigFavorites = [];
  smallFavorites = '';
  bigName = this.bigUser;
  @Input() displayedMovie: MovieData;

  firstfive: Favorite[] = [];
  secondfive: Favorite[] = [];


  constructor(
    private profileService: ProfileService,
    // private userService: UserService,
    private form: FormBuilder,
    private router: Router,
    config: NgbRatingConfig,
    public dialog: MatDialog
  ) {
    // this.userService.isUserLoggedIn.subscribe(value => {
    //   this.isUserLoggedIn = value;
    // });
    this.createForm();
    config.max = 5; config.readonly = true
  }

  openDialog(id): void {
    const dialogRef = this.dialog.open(UpdateDialog, {
      width: '250px',
      data: {favorite: id}
    });
  }

  openRDialog(id): void {
    const dialogRef = this.dialog.open(UpdateReviewModal, {
      width: '550px',
      data: {review: id}
    });
  }

  ngOnInit() {
    this.profileService.getYourReview(this.bigUser).subscribe(data => {
      this.bigReviews = data
    });
    this.profileService.getYourFavorites(this.bigUser).subscribe(data => {
      this.bigFavorites = data;
      console.log(data);
      this.firstfive = this.bigFavorites.slice(0, 5);
      this.secondfive = this.bigFavorites.slice(5, 10);
      localStorage.setItem('currentFav', JSON.stringify(this.bigFavorites));

    })
  }

  profilePic(e) {
    if (this.bigData === 0) {
      return "../../../assets/OwenProfilePic.png"
    } else if (this.bigData === 1){
      return '../../../assets/photo1.jpeg'
    }
  }

  createForm(): void {
    this.selectRanking = this.form.group(
      { ranking: new FormControl }
    );
    this.selectRating = this.form.group({
       reviewText: new FormControl,
       reviewRating: new FormControl
    });
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
    // console.log(id)
    // console.log(typeof ranking)
    this.profileService.updateYourFavorites(id, ranking)
  }

  updateReview(id) {
    const updatedRev = this.selectRating.value;
    console.log(updatedRev);
    console.log(id)
    // console.log(this.selectRating.value)
    // console.log(typeof updatedRev)
    this.profileService.updateYourReviews(id, updatedRev)
    // location.reload();
  }

  updateOn() {
    this.updateTrue = true;
  }

  updateRating(id) {
    const reviewRating = this.selectRating.value;
    // console.log(this.selectRating.value)
    // console.log(typeof reviewRating)
    this.profileService.updateYourReviews(id, reviewRating)
    location.reload();
  }


}

// favorites update modal
@Component({
  selector: 'update-dialog',
  templateUrl: 'update-modal.html',
})
export class UpdateDialog {

  constructor(
    private profileService: ProfileService,
    private router: Router,
    public dialogRef: MatDialogRef<UpdateDialog>,
    private form: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: DialogueData) {
      this.createForm()
    }

    public selectRanking: FormGroup;
  
  onNoClick(): void {
    this.dialogRef.close();
  }

  createForm(): void {
    this.selectRanking = this.form.group(
      { ranking: new FormControl }
    )}

    update(id): void {
      this.serverUpdate(id);
      console.log('updated');
      this.router.navigateByUrl('/#', { skipLocationChange: true }).then(() => this.router.navigate(['/profile']));
      this.dialogRef.close();
    }
    
    serverUpdate(id): void {
      const ranking = this.selectRanking.value;
      // console.log(id)
      // console.log(typeof ranking)
      this.profileService.updateYourFavorites(id, ranking)
    }
}

// reviews update modal
@Component({
  selector: 'update-review-modal',
  templateUrl: 'update-rmodal.html',
  styleUrls: ['./update-rmodal.css']
})
export class UpdateReviewModal {

  constructor(
    private profileService: ProfileService,
    public dialogRef: MatDialogRef<UpdateReviewModal>,
    private router: Router,
    private form: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: ReviewData) {
      this.createForm()
    }

    public selectRating: FormGroup;
  
  onNoClick(): void {
    this.dialogRef.close();
  }

  createForm(): void {
    this.selectRating = this.form.group({
      reviewText: new FormControl,
      reviewRating: new FormControl
   })};

   updateReview(id) {
    const updatedRev = this.selectRating.value;
    console.log(updatedRev);
    console.log(id)
    // console.log(this.selectRating.value)
    // console.log(typeof updatedRev)
    this.profileService.updateYourReviews(id, updatedRev)
    // location.reload();
    this.onNoClick()
  }

  updateMe(id): void {
    this.updateReview(id);
    console.log('updated');
    this.router.navigateByUrl('/#', { skipLocationChange: true }).then(() => this.router.navigate(['/profile']));
  }
    
}
