import { Component, OnInit } from '@angular/core';
import * as constantes from '../../../constantes';
import { fakeTableData } from 'src/app/mockData/mockData';
import { DataService } from 'src/app/services/data.service';
import { NgxNotificationService } from 'ngx-notification';
import { Unidad } from 'src/app/models/unidad';

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

  constructor(
    private dataService: DataService,
    private ngxNotificationService: NgxNotificationService
  ) {}

  ngOnInit() {
    this.getUnidades();
  }

  addTableData(data) {
    this.getUnidades();
    // this.tableData = [...this.tableData, data];
  }

  getUnidades(){
    this.tableData = [];
    this.dataService.getConsultaUnidades().subscribe(data => {
      let unidades = <Unidad[]>data;
      this.tableData = unidades.map(item => {
        return {
          ID_UNIDAD: item.ID_UNIDAD,
          SIGLA: item.SIGLA,
          DESCRIPCION: item.DESCRIPCION
        }
      });
    },
    error => {
      console.log('Error');
      this.errorMessage('No ha sido posible consultar las unidades');
    });
  }

  successMessage(message: string) {
  	this.ngxNotificationService.sendMessage(message, 'success', 'top-right');
  }

  errorMessage(message: string) {
  	this.ngxNotificationService.sendMessage(message, 'danger', 'top-right');
  }
}
