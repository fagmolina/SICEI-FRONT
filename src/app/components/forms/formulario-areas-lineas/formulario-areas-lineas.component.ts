import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { areasMock, lineasMock } from '../../../mockData/mockData';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Area, Linea } from '../../../interfaces/interfaces';
import * as constantes from '../../../constantes';

@Component({
  selector: 'app-formulario-areas-lineas',
  templateUrl: './formulario-areas-lineas.component.html',
  styleUrls: ['./formulario-areas-lineas.component.scss']
})
export class FormularioAreasLineasComponent implements OnInit {
  @Output() formReady = new EventEmitter<FormGroup>();
  constantes = constantes;
  areas = areasMock;
  lineas = lineasMock;
  selectedAreas: Area[] = [];
  selectedLineas: any[] = [];

  areasLineasForm: FormGroup;

  constructor() {
    this.areasLineasForm = new FormGroup({
      lineasControl: new FormControl('', [Validators.required]),
      areasControl: new FormControl('', [Validators.required])
    });
  }

  ngOnInit() {
    this.formReady.emit(this.areasLineasForm);
    this.areasLineasForm.valueChanges.subscribe(changes => {
      this.selectedLineas = [];
      changes.areasControl.forEach(area => {
        area.lineas.forEach(linea => {
          const temp: Linea[] = this.lineas.filter(el => el.id === linea);
          this.selectedLineas.push(temp);
          this.selectedLineas = this.selectedLineas.flat(1);
        });
      });
    });
  }
}
