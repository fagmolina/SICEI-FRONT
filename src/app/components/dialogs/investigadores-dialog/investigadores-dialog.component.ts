import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import * as constantes from '../../../constantes';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: "app-investigadores-dialog",
  templateUrl: "./investigadores-dialog.component.html",
  styleUrls: ["./investigadores-dialog.component.scss"]
})
export class InvestigadoresDialogComponent implements OnInit {
  constantes = constantes;
  investigadorForm = new FormGroup({});
  noInvestigadores = false;

  constructor(
    public dialogRef: MatDialogRef<InvestigadoresDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
  ) { }
  ngOnInit() {
    if (!this.data.length) {
      this.noInvestigadores = true;
    }
  }
  close(investigador?) {
    this.dialogRef.close(investigador);
  }
  formInitialized(name: string, form: FormControl) {
    this.investigadorForm.setControl(name, form);
  }
}
