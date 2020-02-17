import { Component, OnInit } from '@angular/core';
import { FormularioSemilleroService } from 'src/app/services/formulario-semillero.service';
import { MatDialog, MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { NgxNotificationService } from 'ngx-notification';
import { GriftSaveCancelComponent } from 'src/app/components/dialogs/grift-save-cancel/grift-save-cancel.component';
import { ShowFormComponent } from 'src/app/components/dialogs/show-form/show-form.component';

@Component({
  selector: 'app-semillero-confirm',
  templateUrl: './semillero-confirm.component.html',
  styleUrls: ['./semillero-confirm.component.scss']
})
export class SemilleroConfirmComponent implements OnInit {
  dialogData;
  saveData: boolean;
  message: string;
  content;

  constructor(
    private formService: FormularioSemilleroService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar,
    private router: Router,
    private ngxNotificationService: NgxNotificationService
  ) { }

  ngOnInit() {
  }

  save() {
    console.log(this.formService.theForm.getValue());
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
            const form = this.formService.theForm.getValue();
            this.formService.addForm(form);
            // this.openSnackBar('Datos guardados', 'Cerrar');
            this.successMessage('Datos guardados');
            this.showFormAbstract();
            break;
          }
          this.close();
          // this.openSnackBar('Datos eliminados', 'Cerrar');
          this.errorMessage('Datos eliminados');
          break;
        default:
          return;
      }
    });
  }

  openSnackBar(message: string, action: string) {
    debugger;
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

    dialogRef.afterClosed().subscribe(() => {
      this.close();
      this.router.navigate(['/investigacion-institucional']);
    });
  }
  close() {
    this.formService.theForm.next(null);
    this.formService.resetTheForm.next(true);
    this.formService.semilleroStepper.next(null);
  }

  successMessage(message: string) {
  	this.ngxNotificationService.sendMessage(message, 'success', 'bottom-right');
  }

  errorMessage(message: string) {
  	this.ngxNotificationService.sendMessage(message, 'danger', 'top-right');
  }
}
