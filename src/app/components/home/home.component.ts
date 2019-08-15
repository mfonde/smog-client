import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { DatabaseService } from '../../services/database.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieData } from 'src/app/models/MovieData';
import { ReviewsComponent } from "../reviews/reviews.component";
// import needed router info


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'smog-moviereviewcloud-client';

  public searchForm: FormGroup;
  mTitle = '';
  returnUrl: string;

  constructor(
    // add route and router for ActivatedRoutes and Router
    private form: FormBuilder,
    private databaseService: DatabaseService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.createForm();
  }

  ngOnInit() {
    this.searchForm.valueChanges.subscribe(console.log);
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/movie';
  }

  createForm() {
    this.searchForm = this.form.group({
      searchTitle: new FormControl
    });
  }

  onSubmit() {
    console.log(this.searchForm.value.searchTitle);

    this.databaseService.getMovieInfo(this.searchForm.value.searchTitle, () => {
      this.router.navigate([this.returnUrl]);
    })
    // Router functionality
  }
}


