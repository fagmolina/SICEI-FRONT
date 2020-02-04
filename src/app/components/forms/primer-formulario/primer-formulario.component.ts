import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as constantes from '../../../constantes';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { fakeData } from '../../../mockData/mockData';
import { FormularioGRIFTService } from 'src/app/services/formulario-grift.service';

@Component({
  selector: 'app-primer-formulario',
  templateUrl: './primer-formulario.component.html',
  styleUrls: ['./primer-formulario.component.scss']
})
export class PrimerFormularioComponent implements OnInit, AfterViewInit {
  constantes = constantes;
  primerForm: FormGroup;
  fakeData = fakeData;
  constructor(private fb: FormBuilder, private formService: FormularioGRIFTService) {}

  ngOnInit() {
    this.formService.resetTheForm.subscribe(reset => {
      if (reset) {
        this.primerForm.reset();
      }
    });
    this.primerForm = this.fb.group({
      yearControl: new FormControl({ value: '', disabled: false }, Validators.required)
    });
    this.formChanges();
  }

  ngAfterViewInit() {
    this.formValid();
  }

  formValid() {
    this.primerForm.statusChanges.subscribe(valid => {
      this.formService.griftStepper.next({
        ...this.formService.griftStepper.value,
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

  participantes(evento) {
    if (evento.value === '1') {
      this.primerForm.get('participantesControl').enable();
    } else {
      this.primerForm.get('participantesControl').disable();
    }
  }
}
