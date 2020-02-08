import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-grift-save-cancel',
  templateUrl: './grift-save-cancel.component.html',
  styleUrls: ['./grift-save-cancel.component.scss']
})
export class GriftSaveCancelComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<GriftSaveCancelComponent>, @Inject(MAT_DIALOG_DATA) public data) {}

  ngOnInit() {}

  close(value): void {
    this.dialogRef.close(value);
  }
}
