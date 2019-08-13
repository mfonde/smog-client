import { Component, OnInit, Inject } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

export interface DialogData {
  movie: object;
}


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  
  public movie;

  constructor(private databaseService: DatabaseService, public dialog: MatDialog) { this.getMovie(); }

  openDialog(): void {
    const dialogRef = this.dialog.open(NewReviewDialog, {
      width: '800px',
      data: { movie: this.movie }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  getMovie() {
    this.movie = this.databaseService.movie;
  }

  ngOnInit() {
    let x = this.databaseService.movie;
    console.log(x);
  }

}

@Component({
  selector: 'new-review-dialog',
  templateUrl: 'new-review-dialog.html',
})
export class NewReviewDialog {

  constructor(
    public dialogRef: MatDialogRef<NewReviewDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

    onNoClick(): void {
      this.dialogRef.close();
    }

}
