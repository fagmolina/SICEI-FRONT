import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as constantes from '../../constantes';
import { fakeTableData, investigadores } from '../../mockData/mockData';
import { FormGroup } from '@angular/forms';
import { FormularioGRIFTService } from 'src/app/services/formulario-grift.service';
import { GriftStepper, TheForm } from 'src/app/interfaces/interfaces';
import * as moment from 'moment';
import { DataService } from 'src/app/services/data.service';
import { Investigacion } from 'src/app/models/investigacion';

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

  constructor(
    private formService: FormularioGRIFTService,
    private dataService: DataService
    ) {
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

    this.GetInvestigaciones();
  }

  ngAfterViewInit() {
    // this.formService.theForm.subscribe(x => console.log(JSON.stringify(x)));
    this.formService.griftStepper.subscribe((steps: GriftStepper) => {
      this.griftStepper = { ...steps };
    });
  }

  GetInvestigaciones(){
    this.dataService.consultarInvestigaciones().subscribe((data: any) => {
      debugger;
      if(data){
        this.tableData = <Array<Investigacion>>data;
      }
    });
        
  }

  guardar(idStep: number){
    switch(idStep){
      case 1: 
      let investigacion = new Investigacion();
      investigacion.ANO = '2020';
      investigacion.DIRECCION = 1;
      investigacion.ESCUELA = 1;
      investigacion.ESTADO = 1;
      investigacion.EXP_PARTICIPA = 'ex';
      investigacion.ID_INVESTIGACION = '';
      investigacion.PARTICIPACION = 'no';
      investigacion.TITULO = 'prueba desde front';
      investigacion.ID_INVESTIGACION = '';
      let formValue = this.formService.theForm.value;
      // investigacion.ANO = formValue.yearControl;
      // investigacion.DIRECCION = formValue.direccionControl;
      // investigacion.ESCUELA = formValue.escuelasControl;
      debugger;
      this.dataService.mergeInvestigacion(investigacion).subscribe((data: any) =>{
        debugger;
        if(data){
          console.log(data);
        }
      });
      break;
    }
  }
}
