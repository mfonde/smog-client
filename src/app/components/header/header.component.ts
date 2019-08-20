import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
collapsed:Boolean; 
  constructor() { }

  isCollapsed(){
    this.collapsed = !this.collapsed
  }
  ngOnInit() {
  }

}
