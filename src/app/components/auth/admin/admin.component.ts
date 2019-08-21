import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  userSearch = false;
  reviewSearch = false;
  adminOn = false;
  constructor() { }
  ngOnInit() {
    this.adminOn = true;
  }
  onUserSearch() {
    this.userSearch = true;
    this.reviewSearch = false;
  }
  onReviewSearch() {
    this.reviewSearch = true;
    this.userSearch = false;
  }
}
