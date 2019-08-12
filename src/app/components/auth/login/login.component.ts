import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../../../services/auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  returnUrl: string;

  public loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
    console.log('Big Brain Time');

    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }

    let uName = this.loginForm.value.username;
    let uPass = this.loginForm.value.password;

    this.authService.login(uName, uPass);
    console.log(localStorage.getItem('currentUser'));
    this.router.navigate([this.returnUrl]);
    // pipe is used in here to map over user in the service, but in the ts file it refers to first() in the pipe as it is map(user)


  }

}
