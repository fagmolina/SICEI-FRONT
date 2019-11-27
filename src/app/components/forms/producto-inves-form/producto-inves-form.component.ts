import { Component, OnInit } from '@angular/core';
import * as constantes from '../../../constantes';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-producto-inves-form',
  templateUrl: './producto-inves-form.component.html',
  styleUrls: ['./producto-inves-form.component.scss']
})
export class ProductoInvesFormComponent implements OnInit {
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
    instructivoControl: new FormControl(''),
  });
  constructor() { }

  ngOnInit() {
    this.productoInvesForm.valueChanges
      .subscribe(x => console.log(x))
  }

  formInitialized(name: string, form: FormControl) {
    this.productoInvesForm.setControl(name, form);
  }

}
