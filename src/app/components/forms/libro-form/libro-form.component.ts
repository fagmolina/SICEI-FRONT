import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import * as constantes from '../../../constantes';

@Component({
  selector: 'app-libro-form',
  templateUrl: './libro-form.component.html',
  styleUrls: ['./libro-form.component.scss']
})
export class LibroFormComponent implements OnInit {
  @Input() dataFormGroupName: any;
  @Output() formReady = new EventEmitter<FormGroup>();
  constantes = constantes;

  constructor() { }

  ngOnInit() {
    this.dataFormGroupName = new FormGroup({
      yearControl: new FormControl()
    });
    this.formReady.emit(this.dataFormGroupName);
  }

  formInitialized(name: string, form: FormControl) {
    this.dataFormGroupName.setControl(name, form);
  }

}
