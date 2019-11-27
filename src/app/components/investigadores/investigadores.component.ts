import { Component, OnInit } from '@angular/core';
import { DialogService } from 'src/app/services/dialog.service';
import { fakeData, ELEMENT_DATA } from '../../mockData/mockData';
import { DataSource } from '@angular/cdk/table';

@Component({
  selector: 'app-investigadores',
  templateUrl: './investigadores.component.html',
  styleUrls: ['./investigadores.component.scss']
})
export class InvestigadoresComponent implements OnInit {
  investigadores;
  displayedColumns: string[] = ['name', 'weight', 'symbol', 'position'];
  columnsToDisplay: string[] = this.displayedColumns.slice();
  dataSource;

  constructor(private dialogService: DialogService) { }

  ngOnInit() {
    this.investigadores = fakeData;
    this.dataSource = ELEMENT_DATA;
  }

  newInvestigator() {
    const data = {
      data: this.investigadores,
    };
    this.dialogService.openDialog(1, data);
  }

}
