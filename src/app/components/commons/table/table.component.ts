import { Component, OnInit, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() data: any[];
  displayedColumns;
  dataSource;

  constructor() {}

  ngOnInit() {
    this.dataSource = new MatTableDataSource();
    this.displayedColumns =
      this.data.length > 0 ? Object.keys(this.data[0]) : null;
    this.dataSource.data = this.data;
  }
}
