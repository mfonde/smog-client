import { Component, OnInit, Input } from '@angular/core';
import { FavoriteService } from '../../services/favorite.service';
import { Favorite } from '../../models/favorite-model';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  constructor(private favoriteService: FavoriteService) { }
  @Input() searchName: string;
  favorites: Favorite[];

  getFavoritesByUsername() {
    this.favoriteService.getFavoritesByUsername(this.searchName).subscribe(favorites => {
      console.log(favorites);
      this.favorites = favorites;
      console.log(this.favorites);
    })
  }

  ngOnInit() {
    // console.log(this.searchName);
    this.getFavoritesByUsername();
  }

}
