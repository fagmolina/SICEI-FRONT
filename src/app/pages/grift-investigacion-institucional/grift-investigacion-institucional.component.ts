import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as constantes from '../../constantes';
import { fakeTableData } from '../../mockData/mockData';
import { FormGroup } from '@angular/forms';
import { FormularioGRIFTService } from 'src/app/services/formulario-grift.service';
import { GriftStepper, TheForm } from 'src/app/interfaces/interfaces';
import * as moment from 'moment';

@Component({
  selector: 'app-grift-investigacion-institucional',
  templateUrl: './grift-investigacion-institucional.component.html',
  styleUrls: ['./grift-investigacion-institucional.component.scss']
})
export class GriftInvestigacionInstitucionalComponent implements OnInit, AfterViewInit {
  public constantes = constantes;
  public new = false;
  public formularioGRIFT: FormGroup;
  public griftStepper: GriftStepper;
  public fakeTableData = fakeTableData;
  public tableData = [];

  constructor(private formService: FormularioGRIFTService) {
    this.formularioGRIFT = new FormGroup({});
  }

  ngOnInit() {
    this.formService.resetTheForm.subscribe(value => {
      if (value) {
        this.new = false;
      }
    });
    this.formService.forms.subscribe((data) => {
      if (data.length > 0) {
        const el = data.map((x: TheForm) => {
          return {
            // tslint:disable-next-line: no-string-literal
            formId: x['formId'],
            Titulo: x.tituloControl,
            Año: moment(x.yearControl, 'LLL'),
            Escuela: x.escuelasControl.name,
            Investigadores: [...x.investigadores],
            Ver: ''
          };
        });
        this.tableData = [...el];
      }
    });
  }

  ngAfterViewInit() {
    // this.formService.theForm.subscribe(x => console.log(JSON.stringify(x)));
    this.formService.griftStepper.subscribe((steps: GriftStepper) => {
      this.griftStepper = { ...steps };
    });
  }
}
