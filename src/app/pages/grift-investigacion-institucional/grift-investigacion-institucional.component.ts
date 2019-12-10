import { Component, OnInit } from '@angular/core';
import * as constantes from '../../constantes';
import { fakeTableData } from '../../mockData/mockData';
import { FormGroup } from '@angular/forms';
import { FormularioGRIFTService } from 'src/app/services/formulario-grift.service';

@Component({
  selector: 'app-grift-investigacion-institucional',
  templateUrl: './grift-investigacion-institucional.component.html',
  styleUrls: ['./grift-investigacion-institucional.component.scss']
})
export class GriftInvestigacionInstitucionalComponent implements OnInit {
  public constantes = constantes;
  public new = false;
  public formularioGRIFT: FormGroup;

  public fakeTableData = fakeTableData;

  constructor(
    private formService: FormularioGRIFTService
  ) {
    this.formularioGRIFT = new FormGroup({});
  }

  ngOnInit() {
    // this.formService.theForm.subscribe(x => console.log(x));
  }
}
