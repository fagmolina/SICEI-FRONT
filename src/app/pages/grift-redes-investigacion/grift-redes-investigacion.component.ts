import { Component, OnInit } from '@angular/core';
import * as constantes from '../../constantes';
import { fakeData } from 'src/app/mockData/mockData';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-grift-redes-investigacion',
  templateUrl: './grift-redes-investigacion.component.html',
  styleUrls: ['./grift-redes-investigacion.component.scss']
})
export class GriftRedesInvestigacionComponent implements OnInit {
  public constantes = constantes;
  public fakeData = fakeData;
  public form: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      yearControl: new FormControl({ value: '', disabled: false }, Validators.required)
    });
  }

  formInitialized(name: string, form: FormControl) {
    this.form.setControl(name, form);
  }
}
