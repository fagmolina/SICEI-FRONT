import { Component, OnInit } from '@angular/core';
import * as constantes from '../../../constantes';
import { fakeTableData } from 'src/app/mockData/mockData';

@Component({
  selector: 'app-unidades',
  templateUrl: './unidades.component.html',
  styleUrls: ['./unidades.component.scss']
})
export class UnidadesComponent implements OnInit {
  public constantes = constantes;
  public new = false;
  public fakeTableData = fakeTableData;
  public tableData = [];

  constructor() {}

  ngOnInit() {}

  addTableData(data) {
    this.tableData = [...this.tableData, data];
  }
}
