import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as constantes from '../../../constantes';
import { ProducInves, TheForm } from '../../../interfaces/interfaces';
import { FormularioGRIFTService } from 'src/app/services/formulario-grift.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-detalles-form',
  templateUrl: './detalles-form.component.html',
  styleUrls: ['./detalles-form.component.scss']
})
export class DetallesFormComponent implements OnInit, AfterViewInit {
  constantes = constantes;
  detalles: ProducInves = null;
  detallesForm = new FormGroup({});

  constructor(private formService: FormularioGRIFTService) {}

  ngOnInit() {
    this.formChanges();
    this.formService.resetTheForm.subscribe(reset => {
      if (reset) {
        this.detallesForm.reset();
      }
    });
  }

  ngAfterViewInit() {
    this.formValid();
    this.formService.theForm.subscribe((details: TheForm) => {
      this.detalles = details && details.producInves ? { ...details.producInves } : null;
    });
  }

  formValid() {
    this.detallesForm.statusChanges.subscribe(valid => {
      this.formService.griftStepper.next({
        ...this.formService.griftStepper.value,
        stepFour: valid === 'VALID'
      });
    });
  }

  formChanges() {
    if (this.detallesForm.controls) {
      this.detallesForm.valueChanges.subscribe(changes => {
        this.formService.theForm.next({
          ...this.formService.theForm.value,
          detalles: { ...changes }
        });
      });
    }
  }

  formInitialized(name: string, form: FormControl) {
    this.detallesForm.setControl(name, form);
  }

  formGroupInitialized(name: string, form: FormGroup, disabled?: boolean) {
    this.detallesForm.setControl(name, form);
    if (disabled) {
      this.detallesForm.get(name).disable();
    }
  }
}
