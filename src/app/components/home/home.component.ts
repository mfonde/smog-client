import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { DatabaseService } from '../../services/database.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public searchForm: FormGroup;

  returnUrl: string;
  mTitle = '';
  title = 'smog-moviereviewcloud-client';

  constructor(
    private form: FormBuilder,
    private databaseService: DatabaseService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.createForm();
  }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/movie';
  }

  createForm() {
    this.searchForm = this.form.group({
      searchTitle: new FormControl
    });
  }

  onSubmit() {
    this.databaseService.getMovieInfo(this.searchForm.value.searchTitle, () => {
      this.router.navigate([this.returnUrl]);
    })
  }
}


