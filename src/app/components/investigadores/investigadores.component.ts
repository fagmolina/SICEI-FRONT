import { Component, OnInit } from '@angular/core';
import { DialogService } from 'src/app/services/dialog.service';
import { investigadores } from '../../mockData/mockData';
import * as constantes from '../../constantes';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-investigadores',
  templateUrl: './investigadores.component.html',
  styleUrls: ['./investigadores.component.scss']
})
export class InvestigadoresComponent implements OnInit {
  constantes = constantes;
  investigadores;
  displayedNames: string[] = ['Grado', 'C.C.', 'Nombres', 'Acciones'];
  displayedColumns: string[] = ['grade', 'id', 'name', 'actions'];
  displayedColumnsA = [...this.displayedColumns].splice(0, 3);
  displayedColumnsB = [...this.displayedColumns].splice(3, 1);
  dataSource;
  tableData: any[] = [];

  constructor(private dialogService: DialogService) { }

  ngOnInit() {
    this.investigadores = investigadores;
    this.dataSource = new MatTableDataSource();
  }

  newInvestigator() {
    const data = {
      data: this.tableData.length === 0 ? this.investigadores : this.investigadores.filter(s => !this.tableData.includes(s)),
    };
    this.dialogService.openDialog(1, data).subscribe(dialogResponse => {
      if (dialogResponse) {
        this.tableData.push(dialogResponse);
        this.dataSource.data = this.tableData;
      }
    });
  }

  remove(element, index) {
    const tempArray = [...this.dataSource.data.filter((v, i) => {
      return i !== index;
    })];
    this.dataSource.data = tempArray;
    this.tableData = tempArray;
  }

}
