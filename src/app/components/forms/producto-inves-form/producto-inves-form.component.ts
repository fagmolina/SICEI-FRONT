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
  }

  ngAfterViewInit() {
    this.formValid();
  }

  formValid() {
    this.productoInvesForm.statusChanges.subscribe(valid => {
      this.formService.griftStepper.next({
        ...this.formService.griftStepper.value,
        stepThree: valid === 'VALID'
      });
    });
  }

  formChanges() {
    this.productoInvesForm.valueChanges.subscribe(changes => {
      const keys = Object.keys(changes);
      const values = Object.values(changes);
      const result = [];
      for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        const value = values[i];
        const obj = {};
        obj[key] = value && value !== '' ? value : false;
        result.push(obj);
      }
      this.formService.theForm.next({
        ...this.formService.theForm.value,
        producInves: result
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

  submit() {
    console.log(JSON.stringify(this.productoInvesForm.value));
  }
}
