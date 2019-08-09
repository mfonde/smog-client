import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  public movie;

  constructor(private databaseService: DatabaseService) { this.getMovie(); }

  getMovie() {
    this.movie = this.databaseService.movie;
  }

  ngOnInit() {
    let x = this.databaseService.movie;
    console.log(x);
  }


}
