import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import * as constantes from '../../constantes';

@Component({
  selector: 'app-participacion-form',
  templateUrl: './participacion-form.component.html',
  styleUrls: ['./participacion-form.component.scss']
})
export class ParticipacionFormComponent implements OnInit {
  @Output()
  participan = new EventEmitter<boolean>();
  constantes = constantes;
  participacionForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.participacionForm = this.fb.group({
      participacionControl: new FormControl(0, Validators.required)
    });
    this.participacionForm.statusChanges.subscribe(x => console.log(x));
  }

  formGroupInitialized(name: string, form: FormGroup, disabled?: boolean) {
    this.participacionForm.setControl(name, form);
    if (disabled) {
      this.participacionForm.get(name).disable();
    }
  }

  setParticipan(evento) {
    this.participan.emit(evento);
  }
}
