import { Component, OnInit } from '@angular/core';
import { FormularioGRIFTService } from 'src/app/services/formulario-grift.service';
import { MatDialog } from '@angular/material';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GriftSaveCancelComponent } from '../dialogs/grift-save-cancel/grift-save-cancel.component';
import { ShowFormComponent } from '../dialogs/show-form/show-form.component';

@Component({
  selector: 'app-grift-form-confirm',
  templateUrl: './grift-form-confirm.component.html',
  styleUrls: ['./grift-form-confirm.component.scss']
})
export class GriftFormConfirmComponent implements OnInit {
  dialogData;
  saveData: boolean;
  message: string;
  content;
  constructor(private formService: FormularioGRIFTService, public dialog: MatDialog, private snackBar: MatSnackBar) {}

  ngOnInit() {}

  save() {
    this.saveData = true;
    this.message = 'Está seguro de querer guardar los cambios?';
    this.openDialog();
  }
  clear() {
    this.saveData = false;
    this.message = 'Está seguro de querer borrar los cambios?';
    this.openDialog();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(GriftSaveCancelComponent, {
      data: {
        message: this.message
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      switch (result) {
        case true:
          if (this.saveData) {
            this.openSnackBar('Datos guardados', 'Cerrar');
            this.showFormAbstract();
            break;
          }
          this.formService.theForm.next(null);
          this.formService.resetTheForm.next(true);
          this.formService.griftStepper.next(null);
          this.openSnackBar('Datos eliminados', 'Cerrar');
          break;
        default:
          return;
      }
    });
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000
    });
  }

  showFormAbstract() {
    const dialogRef = this.dialog.open(ShowFormComponent, {
      data: {
        message: this.formService.theForm.getValue()
      }
    });

    dialogRef.afterClosed().subscribe(value => {
      console.log(value, 'Navegación');
    });
  }
}
