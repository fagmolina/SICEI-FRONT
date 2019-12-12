import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { InputData } from 'src/app/interfaces/interfaces';
import { FormControl, Validators } from '@angular/forms';
import * as constantes from '../../../constantes';

@Component({
  selector: 'app-simple-input',
  templateUrl: './simple-input.component.html',
  styleUrls: ['./simple-input.component.scss']
})
export class SimpleInputComponent implements OnInit {
  @Input() data: InputData;
  @Output() formReady = new EventEmitter<FormControl>();
  constantes = constantes;
  formControl = new FormControl('', Validators.required);

  constructor() {}

  ngOnInit() {
    this.formReady.emit(this.formControl);
  }
}
