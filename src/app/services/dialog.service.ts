import { Injectable, Inject } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { InvestigadoresDialogComponent } from "../components/dialogs/investigadores-dialog/investigadores-dialog.component";

@Injectable({
  providedIn: "root"
})
export class DialogService {
  constructor(public dialog: MatDialog) {}

  openDialog(componentID: number, data: any) {
    let component: any;
    switch (componentID) {
      case 1:
        component = InvestigadoresDialogComponent;
        break;
      default:
        component = null;
        break;
    }
    const dialogRef = this.dialog.open(component, data);
    dialogRef.afterClosed().subscribe(response => {
      console.log(response);
    });
  }
}
