import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import * as constantes from '../../constantes';

@Component({
  selector: 'app-participacion-form',
  templateUrl: './participacion-form.component.html',
  styleUrls: ['./participacion-form.component.scss']
})
export class ParticipacionFormComponent implements OnInit {
  constantes = constantes;
  participacionForm: FormGroup;
  cuales: boolean;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.participacionForm = this.fb.group({
      participacion: new FormControl({value: false}, Validators.required),
      // cuales: new FormControl({value: '', disabled: true}, Validators.required)
    });
    this.participacionForm.valueChanges.subscribe(a => this.cuales = a);
  }
  formGroupInitialized(name: string, form: FormGroup) {
    this.participacionForm.setControl(name, form);
  }
}
