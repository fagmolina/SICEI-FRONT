import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-show-form',
  templateUrl: './show-form.component.html',
  styleUrls: ['./show-form.component.scss']
})
export class ShowFormComponent implements OnInit {
  content;

  constructor(public dialogRef: MatDialogRef<ShowFormComponent>, @Inject(MAT_DIALOG_DATA) public data) {}

  ngOnInit() {
    this.content = this.data.message;
  }
}
