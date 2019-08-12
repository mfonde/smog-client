import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { UserService } from '../../../services/user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private userService: UserService
  ) {
    if (this.authService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {

    console.log(this.authService.currentUserValue);

    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    console.log(this.registerForm.value);
    if (this.registerForm.invalid) {
      console.log('Failed')
      return;
    }

    this.userService.register(this.registerForm.value).subscribe(data => {
      console.log(data);
      this.router.navigate(['/login']);
    })

  }


}
