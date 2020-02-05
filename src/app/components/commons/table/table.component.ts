import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import _ from 'lodash';
import { FormularioGRIFTService } from 'src/app/services/formulario-grift.service';
import { MatDialog } from '@angular/material';
import { ShowFormComponent } from '../../dialogs/show-form/show-form.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, OnChanges {
  @Input() data: any[];
  displayedColumns;
  dataSource;

  constructor(private formService: FormularioGRIFTService, public dialog: MatDialog, private router: Router) {}

  ngOnInit() {}

  ngOnChanges() {
    this.renderData();
  }

  renderData() {
    // Esto es para que no se muestre el password en la table pero se supone que esta data debe venir de la DB sin el campo del password
    const newData = this.data.map(el => _.omit(el, 'passwdControl'));
    this.dataSource = new MatTableDataSource();
    this.displayedColumns = newData.length > 0 ? Object.keys(newData[0]) : null;
    this.dataSource.data = newData;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getData(element) {
    // tslint:disable-next-line: no-string-literal
    const form = this.formService.forms.value.filter(x => x['formId'] === element.formId);
    this.openDialog(form[0]);
  }

  openDialog(form): void {
    const dialogRef = this.dialog.open(ShowFormComponent, {
      data: {
        message: form
      }
    });

    dialogRef.afterClosed().subscribe(() => {});
  }
}
