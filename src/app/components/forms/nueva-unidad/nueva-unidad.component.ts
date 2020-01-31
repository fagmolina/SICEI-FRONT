import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-nueva-unidad',
  templateUrl: './nueva-unidad.component.html',
  styleUrls: ['./nueva-unidad.component.scss']
})
export class NuevaUnidadComponent implements OnInit {
  @Output() sigla = new EventEmitter<any>();
  newUnidad = new FormGroup({
    Sigla: new FormControl('', [Validators.required]),
    Descripción: new FormControl('', [Validators.required]),
    Tipo: new FormControl('', [Validators.required])
  });
  tipos = ['Escuela', 'Dirección', 'Oficina ASC'];

  constructor() {}

  ngOnInit() {}

  enviarSigla() {
    this.sigla.emit({ '#': null, ...this.newUnidad.value });
    this.reset();
  }

  reset() {
    this.newUnidad.reset();
  }
}
