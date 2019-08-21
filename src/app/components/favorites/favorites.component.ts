import { Component, OnInit, Input } from '@angular/core';
import { FavoriteService } from '../../services/favorite.service';
import { Favorite } from '../../models/favorite-model';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  favorites: Favorite[];
  @Input() searchName: string;

  constructor(private favoriteService: FavoriteService) { }

  getFavoritesByUsername() {
    this.favoriteService.getFavoritesByUsername(this.searchName).subscribe(favorites => {
      this.favorites = favorites;
    })
  }

  ngOnInit() {
    this.getFavoritesByUsername();
  }
}
