import { Component, OnInit } from '@angular/core';

const smallUser = JSON.parse(localStorage.getItem('currentUser'));

@Component({
  selector: 'app-auth-header',
  templateUrl: './auth-header.component.html',
  styleUrls: ['./auth-header.component.css']
})
export class AuthHeaderComponent implements OnInit {
  public admin = smallUser.user.admin;

  constructor() { }

  ngOnInit() { }

  logOut() {
    localStorage.clear();
    location.reload();
  }
}
