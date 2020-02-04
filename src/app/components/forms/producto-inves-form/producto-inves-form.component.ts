import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as constantes from '../../../constantes';
import { FormGroup, FormControl } from '@angular/forms';
import { FormularioGRIFTService } from 'src/app/services/formulario-grift.service';

@Component({
  selector: 'app-producto-inves-form',
  templateUrl: './producto-inves-form.component.html',
  styleUrls: ['./producto-inves-form.component.scss']
})
export class ProductoInvesFormComponent implements OnInit, AfterViewInit {
  constantes = constantes;
  productoInvesForm = new FormGroup({
    guiaControl: new FormControl(''),
    cartillaControl: new FormControl(''),
    prototipoControl: new FormControl(''),
    articuloControl: new FormControl(''),
    libroControl: new FormControl(''),
    capituloControl: new FormControl(''),
    manualesControl: new FormControl(''),
    procedimientoControl: new FormControl(''),
    instructivoControl: new FormControl('')
  });
  constructor(private formService: FormularioGRIFTService) {}

  ngOnInit() {
    this.formChanges();
    this.formService.resetTheForm.subscribe(reset => {
      if (reset) {
        this.productoInvesForm.reset();
      }
    });
  }

  ngAfterViewInit() {
    this.formValid();
  }

  formValid() {
    this.productoInvesForm.statusChanges.subscribe(valid => {
      this.formService.griftStepper.next({
        ...this.formService.griftStepper.value,
        stepThree: valid === 'VALID',
        stepFour: false
      });
    });
  }

  formChanges() {
    this.productoInvesForm.valueChanges.subscribe(changes => {
      this.formService.theForm.next({
        ...this.formService.theForm.value,
        producInves: { ...changes }
      });
    });
  }

  formInitialized(name: string, form: FormControl) {
    this.productoInvesForm.setControl(name, form);
  }

  formGroupInitialized(name: string, form: FormGroup, disabled?: boolean) {
    this.productoInvesForm.setControl(name, form);
    if (disabled) {
      this.productoInvesForm.get(name).disable();
    }
  }
}
