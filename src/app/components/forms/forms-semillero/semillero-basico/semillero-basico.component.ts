import { Component, OnInit } from '@angular/core';

import { fakeData } from '../../../../mockData/mockData';
import * as constantes from '../../../../constantes';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { FormularioSemilleroService } from 'src/app/services/formulario-semillero.service';

@Component({
  selector: 'app-semillero-basico',
  templateUrl: './semillero-basico.component.html',
  styleUrls: ['./semillero-basico.component.scss']
})
export class SemilleroBasicoComponent implements OnInit {
  constantes = constantes;
  primerForm: FormGroup;
  fakeData = fakeData;

  constructor(
    private fb: FormBuilder,
    private formService: FormularioSemilleroService) { }

  ngOnInit() {
    this.formService.resetTheForm.subscribe(reset => {
      if (reset) {
        this.primerForm.reset();
      }
    });
    this.primerForm = this.fb.group({
      
    });
    this.formChanges();
  }

  ngAfterViewInit() {
    this.formValid();
  }

  formValid() {
    this.primerForm.statusChanges.subscribe(valid => {
      this.formService.semilleroStepper.next({
        ...this.formService.semilleroStepper.value,
        stepOne: valid === 'VALID'
      });
    });
  }

  formChanges() {
    this.primerForm.valueChanges.subscribe(changes => {
      this.formService.theForm.next({
        ...this.formService.theForm.value,
        ...changes
      });
    });
  }

  formInitialized(name: string, form: FormControl) {
    this.primerForm.setControl(name, form);
  }

  formGroupInitialized(name: string, form: FormGroup, disabled?: boolean) {
    this.primerForm.setControl(name, form);
    if (disabled) {
      this.primerForm.get(name).disable();
    }
  }
}
