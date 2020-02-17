import { Component, OnInit } from '@angular/core';

import { fakeData } from '../../../../mockData/mockData';
import * as constantes from '../../../../constantes';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { FormularioSemilleroService } from 'src/app/services/formulario-semillero.service';

@Component({
  selector: 'app-semillero-red',
  templateUrl: './semillero-red.component.html',
  styleUrls: ['./semillero-red.component.scss']
})
export class SemilleroRedComponent implements OnInit {
  constantes = constantes;
  redForm: FormGroup;
  fakeData = fakeData;

  constructor(
    private fb: FormBuilder,
    private formService: FormularioSemilleroService
  ) { }

  ngOnInit() {
    this.formService.resetTheForm.subscribe(reset => {
      if (reset) {
        this.redForm.reset();
      }
    });
    this.redForm = this.fb.group({
      yearControl: new FormControl({ value: '', disabled: false }, Validators.required)
    });
    this.formChanges();
  }

  ngAfterViewInit() {
    this.formValid();
  }

  formValid() {
    this.redForm.statusChanges.subscribe(valid => {
      this.formService.semilleroStepper.next({
        ...this.formService.semilleroStepper.value,
        stepFive: valid === 'VALID'
      });
    });
  }

  formChanges() {
    this.redForm.valueChanges.subscribe(changes => {
      this.formService.theForm.next({
        ...this.formService.theForm.value,
        ...changes
      });
    });
  }

  formInitialized(name: string, form: FormControl) {
    this.redForm.setControl(name, form);
  }

  formGroupInitialized(name: string, form: FormGroup, disabled?: boolean) {
    this.redForm.setControl(name, form);
    if (disabled) {
      this.redForm.get(name).disable();
    }
  }
}
