import { Component, OnInit } from '@angular/core';
import * as constantes from '../../constantes';
import { fakeData } from 'src/app/mockData/mockData';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ComponentsService } from 'src/app/services/components.service';
import { DataService } from 'src/app/services/data.service';
import { CasoEmblematico } from 'src/app/models/caso-emblematico';

@Component({
  selector: 'app-grift-caso-emblematico',
  templateUrl: './grift-caso-emblematico.component.html',
  styleUrls: ['./grift-caso-emblematico.component.scss']
})
export class GriftCasoEmblematicoComponent implements OnInit {
  public constantes = constantes;
  public fakeData = fakeData;
  public new = false;
  public tableData = [];
  // public tableData = [{Nombre: 'A', valor: 25},{Nombre: 'b', valor: 35}];

  constructor(
    private _componentService: ComponentsService,
    private dataService: DataService
  ) { }

  ngOnInit() {
    this._componentService.newCasoEmblematico.subscribe(
      data => {
        this.new = <boolean>data;
        this.getCasos();
      }
    );
    this.getCasos();
  }

  getCasos(){
    this.dataService.getCasosEmblematicos().subscribe( data => {
      let casos: CasoEmblematico[] = <CasoEmblematico[]>data;
      this.tableData = casos.map(item => {
        return {
          IdCaso: item.ID_CASO,
          Caso: item.NOMBRE_CASO,
          Lugar: item.LUGAR_AFECTACION,
          Actividades: item.ACTIVIDADES
        }
      });
    });
  }
}
