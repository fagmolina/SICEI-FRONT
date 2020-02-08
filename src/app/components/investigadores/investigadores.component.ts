import { Component, OnInit } from '@angular/core';
import { DialogService } from 'src/app/services/dialog.service';
import { investigadores } from '../../mockData/mockData';
import * as constantes from '../../constantes';
import { MatTableDataSource } from '@angular/material/table';
import { FormularioGRIFTService } from 'src/app/services/formulario-grift.service';

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

  constructor(
    private dialogService: DialogService,
    private formService: FormularioGRIFTService
  ) {}

  ngOnInit() {
    this.investigadores = investigadores;
    this.dataSource = new MatTableDataSource();
    this.formService.resetTheForm.subscribe(reset => {
      if (reset) {
        this.investigadores = [];
      }
    });
  }

  checkDataValid(data) {
    if (data) {
      this.formService.griftStepper.next({
        ...this.formService.griftStepper.value,
        stepTwo: data.length > 0
      });
      this.formService.theForm.next({
        ...this.formService.theForm.value,
        investigadores: data.length > 0 ? this.dataSource.data : null
      });
    }
  }

  newInvestigator() {
    const data = {
      data:
        this.tableData.length === 0
          ? this.investigadores
          : this.investigadores.filter(s => !this.tableData.includes(s))
    };
    this.dialogService.openDialog(1, data).subscribe(dialogResponse => {
      if (dialogResponse) {
        this.tableData.push(dialogResponse);
        this.dataSource.data = this.tableData;
        this.checkDataValid(this.dataSource.data);
      }
    });
  }

  remove(element, index) {
    const tempArray = [
      ...this.dataSource.data.filter((v, i) => {
        return i !== index;
      })
    ];
    this.dataSource.data = tempArray;
    this.tableData = tempArray;
    this.checkDataValid(this.dataSource.data);
  }
}
