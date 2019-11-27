import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import * as constantes from '../../../constantes';
@Component({
  selector: "app-investigadores-dialog",
  templateUrl: "./investigadores-dialog.component.html",
  styleUrls: ["./investigadores-dialog.component.scss"]
})
export class InvestigadoresDialogComponent implements OnInit {
  constantes = constantes;

  constructor(
    public dialogRef: MatDialogRef<InvestigadoresDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
  ) {}
  ngOnInit() {
    console.log(this.data);
  }
}
