import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as constantes from '../../../constantes';

@Component({
  selector: 'app-articulo-form',
  templateUrl: './articulo-form.component.html',
  styleUrls: ['./articulo-form.component.scss']
})
export class ArticuloFormComponent implements OnInit {
  @Output() formReady = new EventEmitter<FormGroup>();
  constantes = constantes;
  articuloForm = new FormGroup({ yearControl: new FormControl('', Validators.required) });

  constructor() { }

  ngOnInit() {
    this.formReady.emit(this.articuloForm);
  }

  formInitialized(name: string, form: FormControl) {
    this.articuloForm.setControl(name, form);
  }

}
