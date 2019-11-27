import { Injectable, Inject } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { InvestigadoresDialogComponent } from "../components/dialogs/investigadores-dialog/investigadores-dialog.component";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class DialogService {
  constructor(public dialog: MatDialog) {}

  openDialog(componentID: number, data: any): Observable<any> {
    let component: any;
    let dialogSubscription;
    switch (componentID) {
      case 1:
        component = InvestigadoresDialogComponent;
        break;
      default:
        component = null;
        break;
    }
    const dialogRef = this.dialog.open(component, data);
    dialogSubscription = dialogRef.afterClosed();
    return dialogSubscription;
  }
}
