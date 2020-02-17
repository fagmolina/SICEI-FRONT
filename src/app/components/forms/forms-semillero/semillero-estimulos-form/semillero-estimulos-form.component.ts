import { Component, OnInit } from '@angular/core';
import * as constantes from '../../../../constantes';
import { FormGroup, FormControl } from '@angular/forms';
import { FormularioSemilleroService } from 'src/app/services/formulario-semillero.service';

@Component({
  selector: 'app-semillero-estimulos-form',
  templateUrl: './semillero-estimulos-form.component.html',
  styleUrls: ['./semillero-estimulos-form.component.scss']
})
export class SemilleroEstimulosFormComponent implements OnInit {
  constantes = constantes;
  estimulosForm = new FormGroup({
    condecoracionesControl: new FormControl(''),
    felicitacionesControl: new FormControl(''),
    personajeMesControl: new FormControl(''),
    permisosControl: new FormControl(''),
    estatuillasControl: new FormControl(''),
    monedasControl: new FormControl(''),
    capacitacionesControl: new FormControl('')
  });

  constructor(
    private formService: FormularioSemilleroService
  ) { }

  ngOnInit() {
    this.formService.resetTheForm.subscribe(reset => {
      if (reset) {
        this.estimulosForm.reset();
      }
    });
    this.formValid();
  }

  formValid() {
    this.estimulosForm.statusChanges.subscribe(valid => {
      this.formService.semilleroStepper.next({
        ...this.formService.semilleroStepper.value,
        stepFour: valid === 'VALID'
      });
    });
  }
}
