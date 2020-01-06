import { Component, OnInit } from '@angular/core';
import { FormularioGRIFTService } from 'src/app/services/formulario-grift.service';
import { GriftSaveCancelComponent } from '../dialogs/grift-save-cancel/grift-save-cancel.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-grift-form-confirm',
  templateUrl: './grift-form-confirm.component.html',
  styleUrls: ['./grift-form-confirm.component.scss']
})
export class GriftFormConfirmComponent implements OnInit {
  dialogData;
  saveData: boolean;
  message: string;
  constructor(private formService: FormularioGRIFTService, public dialog: MatDialog) {}

  ngOnInit() {}

  save() {
    console.log('salvar el formulario');
    this.message = 'Está seguro de querer guardar los cambios?';
    this.openDialog();
  }
  clear() {
    this.message = 'Está seguro de querer borrar los cambios?';
    this.openDialog();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(GriftSaveCancelComponent, {
      data: {
        message: this.message,
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Result: ', result);
    });
  }
}
