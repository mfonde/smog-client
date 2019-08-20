import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
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

  currentUser = JSON.parse(localStorage.getItem('currentUser'));
  public userSearchForm: FormGroup;
  public userUpdateForm: FormGroup;
  public userId = this.currentUser.user.id;
  public id;
  public user = [];

  userDisplayed = false;

  @Input() adminOn;
  @ViewChild('usernameInput', { static: false }) usernameInputRef: ElementRef;
  @ViewChild('emailInput', { static: false }) emailInputRef: ElementRef;
  @ViewChild('passwordInput', { static: false }) passwordInputRef: ElementRef;
  @ViewChild('profilePicInput', { static: false }) profilePicInputRef: ElementRef;
  @ViewChild('adminInput', { static: false }) adminInputRef: ElementRef;

  constructor(
    private form: FormBuilder,
    private userService: UserService,
    private reviewService: ReviewService
  ) {
    this.createForm();
    this.editForm();
  }
  ngOnInit() {
  }

  editUserOn = false;
  editUser() {
    this.editUserOn = true;
  }

  deleteUserOn = false;
  deleteUser() {
    this.deleteUserOn = true;
  }

  saveEditUser() {
    const username = this.usernameInputRef.nativeElement.value;
    const email = this.emailInputRef.nativeElement.value;
    const password = this.passwordInputRef.nativeElement.value;
    const id = this.id;
    const profilePic = this.profilePicInputRef.nativeElement.value;
    const admin = this.adminInputRef.nativeElement.value;
    const userUpdate = new UserData(username, email, password, profilePic, id, admin);
    this.userService.update(userUpdate);
  }

  saveDeleteUser() {
    const id = this.id;
    this.userService.delete(id);
    if (this.userId == this.id) {
      localStorage.clear()
    };
    location.reload();
  }

  editForm() {
    this.userUpdateForm = this.form.group({
      username: new FormControl,
      email: new FormControl,
      password: new FormControl,
      profilePic: new FormControl,
      admin: new FormControl
    })
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
    this.userService.get(searchName).subscribe(data => {
      this.user = data[0];
      this.id = data[0].id;
    });
    this.reviewService.getReviewsByUsername(searchName);

  }
}
