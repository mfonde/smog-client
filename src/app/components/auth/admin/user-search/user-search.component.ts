import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent implements OnInit {
  public userSearchForm: FormGroup;

  constructor(private form: FormBuilder) { this.createForm() }

  ngOnInit() {
  }

  createForm() {
    this.userSearchForm = this.form.group({
      searchName: new FormControl
    });
  }

  onSubmit() {
    
  }

}
