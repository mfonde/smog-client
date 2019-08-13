import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'smog-moviereviewcloud-client';
  sessionToken = localStorage.getItem('sessionToken');
  currentUser = localStorage.getItem('currentUser');
}
