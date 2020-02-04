import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import _ from 'lodash';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, OnChanges {
  @Input() data: any[];
  displayedColumns;
  dataSource;

  constructor() {}

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
}
