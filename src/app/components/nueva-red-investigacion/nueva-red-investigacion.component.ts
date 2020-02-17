import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

import * as constantes from '../../constantes';
import { colombia } from '../../jsonColombia/colombia';
import { paises } from '../../paises/paises';

import { fakeData } from '../../mockData/mockData';
import { DialogService } from 'src/app/services/dialog.service';
import { DataService } from 'src/app/services/data.service';
import { MatTableDataSource } from '@angular/material';
import { ComponentsService } from 'src/app/services/components.service';

@Component({
  selector: 'app-nueva-red-investigacion',
  templateUrl: './nueva-red-investigacion.component.html',
  styleUrls: ['./nueva-red-investigacion.component.scss']
})
export class NuevaRedInvestigacionComponent implements OnInit {

  public constantes = constantes;
  public colombia = colombia;
  public paises = paises;
  public form: FormGroup;
  fakeData = fakeData;

  dataSource;
  tableData: any[] = [];
  departamento: string[];

  constructor(
    private fb: FormBuilder,
    private _componentService: ComponentsService
  ) { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource();
    this.form = this.fb.group({
      departamentosControl: new FormControl('', Validators.required),
      ciudadControl: new FormControl('', Validators.required),
      fechaControl: new FormControl('', Validators.required),
      nationalControl: new FormControl(false)
    });
    this.formChanges();
  }

  formChanges() {
    this.form.valueChanges.subscribe(changes => {
      console.log(this.form);
      if (changes && changes.departamentosControl) {
        this.departamento = changes.departamentosControl.ciudades;
        const form = this.form.controls;
        console.log(this.form);
      }
    });
  }

  formInitialized(name: string, form: FormControl) {
    this.form.setControl(name, form);
  }

  save(){
    this._componentService.newRedInvestigacion.next(false);
  }
}
