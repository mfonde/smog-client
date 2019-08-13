import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { UserService } from '../../../../services/user.service';
import { ReviewService } from '../../../../services/review.service';
import { UserData } from '../../../../models/UserData';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})



export class UserSearchComponent implements OnInit {
  public userSearchForm: FormGroup;
  userDisplayed = false;
  @ViewChild('usernameInput', {static:false}) usernameInputRef: ElementRef;
  @ViewChild('emailInput', {static:false}) emailInputRef: ElementRef;  
  @ViewChild('passwordInput', {static:false}) passwordInputRef: ElementRef;
  @ViewChild('profilePicInput', {static:false}) profilePicInputRef: ElementRef;
  @ViewChild('adminInput', {static:false}) adminInputRef: ElementRef;

  public user = [];
  currentUser = JSON.parse(localStorage.getItem('currentUser'));
  public userId = this.currentUser.user.id;

  constructor(private form: FormBuilder, private userService: UserService, private reviewService: ReviewService) { this.createForm() }
  editUserOn = false;

  editUser() {
    this.editUserOn = true;
  }

  saveEditUser() {
    const username = this.usernameInputRef.nativeElement.value;
    const email = this.emailInputRef.nativeElement.value;
    const password = this.passwordInputRef.nativeElement.value;
    // const id = this.idInputRef.nativeElement.value;
    const id = this.userId;
    const profilePic = this.profilePicInputRef.nativeElement.value;
    const admin = this.adminInputRef.nativeElement.value;

    const userUpdate = new UserData(username, email, password, profilePic, admin);
    console.log(id);
    this.userService.update(userUpdate).subscribe(user => console.log(user));
  }

  ngOnInit() {
  }

  createForm() {
    this.userSearchForm = this.form.group({
      searchName: new FormControl
    });
  }

  displayUser() {
    this.userDisplayed = true;
  }

  onSubmit() {
    const searchName = this.userSearchForm.value.searchName;
    console.log(searchName);

    this.userService.get(searchName).subscribe(data =>{
      this.user=data[0]; 
      console.log(this.user)
    } 
    );
    this.reviewService.getReviewsByUsername(searchName).subscribe(data => {
      console.log(data);
    })
  }
}
