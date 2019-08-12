import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { UserService } from '../../../services/user.service';
import { User } from '../../../models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registerForm: FormGroup;
  public currentUser;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private userService: UserService
  ) {
    if (this.authService.currentUserValue) {
      this.router.navigate(['/login']);
    }
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.registerForm = this.formBuilder.group({
      username: new FormControl,
      email: new FormControl,
      password: new FormControl,
      profilePic: new FormControl(0),
      admin: new FormControl(false)
    });
  }

  onSubmit() {
    this.currentUser = new User(this.registerForm.value);
    console.log(this.currentUser)
    if (this.registerForm.invalid) {
      console.log('Failed')
      return;
    }
    this.userService.register(this.currentUser);
    // this.router.navigate(['/login'])
  }
}
