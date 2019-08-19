import { Component, OnInit, Input } from '@angular/core';
import { Favorite } from 'src/app/models/favorite-model';

@Component({
  selector: 'app-favorite-item',
  templateUrl: './favorite-item.component.html',
  styleUrls: ['./favorite-item.component.css']
})
export class FavoriteItemComponent implements OnInit {
  @Input() favorite: Favorite;

  constructor() { }

  ngOnInit() {
  }

}
