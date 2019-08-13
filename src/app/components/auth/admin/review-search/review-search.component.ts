import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-review-search',
  templateUrl: './review-search.component.html',
  styleUrls: ['./review-search.component.css']
})
export class ReviewSearchComponent implements OnInit {
  public reviewSearchForm: FormGroup;

  constructor(private form: FormBuilder) { this.createForm() }

  ngOnInit() {
  }

  createForm() {
    this.reviewSearchForm = this.form.group({
      searchReview: new FormControl
    })
  }

  onSubmit() {
    
  }

}
