import { Component, OnInit } from '@angular/core';

import * as constantes from '../../constantes';
import { fakeTableData } from '../../mockData/mockData';
import { SemilleroStepper, FormSemillero } from 'src/app/interfaces/interfaces';
import { FormGroup } from '@angular/forms';
import { FormularioSemilleroService } from 'src/app/services/formulario-semillero.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-grift-semilleros-investigacion',
  templateUrl: './grift-semilleros-investigacion.component.html',
  styleUrls: ['./grift-semilleros-investigacion.component.scss']
})
export class GriftSemillerosInvestigacionComponent implements OnInit {

  public constantes = constantes;
  public new = false;
  public form: FormGroup;
  public semilleroStepper: SemilleroStepper;
  public fakeTableData = fakeTableData;
  public tableData = [];

  constructor(
    private formService: FormularioSemilleroService,
    private dataService: DataService
  ) { 
    this.form = new FormGroup({});
  }

  ngOnInit() {
    this.formService.resetTheForm.subscribe(value => {
      if(value){
        this.new = false;
      }
    });
    this.formService.forms.subscribe((data) => {
      if(data.length > 0){
        const el = data.map((x: FormSemillero) => {
          return {
            formId: x['formId'],
            NombreSemillero: x.nombreSemillero,
            Escuela: x.escuelasControl.name,
            Investigadores: [...x.investigadores],
            Ver: ''
          };
        });
      }
    });
  }

  ngAfterViewInit() {
    // this.formService.theForm.subscribe(x => console.log(JSON.stringify(x)));
    this.formService.semilleroStepper.subscribe((steps: SemilleroStepper) => {
      this.semilleroStepper = { ...steps };
    });
  }

  guardar(){
    
  }

}
