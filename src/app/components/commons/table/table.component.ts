import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

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
    this.dataSource = new MatTableDataSource();
    this.displayedColumns = this.data.length > 0 ? Object.keys(this.data[0]) : null;
    this.dataSource.data = this.data;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
