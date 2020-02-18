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
import { RedInvestigacion } from 'src/app/models/red-investigacion';
import { NgxNotificationService } from 'ngx-notification';

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
    private _componentService: ComponentsService,
    private dataService: DataService,
    private ngxNotificationService: NgxNotificationService
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
    let nuevaRedInvestigacion = new RedInvestigacion();
    debugger;
    nuevaRedInvestigacion.ENTIDAD = this.form.get("entidadConformaControl").value;
    nuevaRedInvestigacion.ID_RED = 0;
    nuevaRedInvestigacion.NOMBRE_RED = this.form.get("nombreRedControl").value;
    nuevaRedInvestigacion.SEDE_CIUDAD = this.form.get("ciudadControl").value;
    nuevaRedInvestigacion.ANO_CREACION = new Date(this.form.get("fechaControl").value).getFullYear().toString();
    if(!this.form.get("nationalControl").value){
      nuevaRedInvestigacion.SEDE_DEPTO = this.form.get("departamentosControl").value["departamento"];
    }else{
      nuevaRedInvestigacion.SEDE_DEPTO = this.form.get("departamentosControl").value["nombre"];
    }

    this.dataService.mergeRedInvestigacion(nuevaRedInvestigacion).subscribe(data => {
      this.successMessage("Red guardada con éxito");
      this._componentService.newRedInvestigacion.next(false);
    },
    error => {
      this.errorMessage("Error al guardar la red");
      this._componentService.newRedInvestigacion.next(false);
    });
  }

  successMessage(message: string) {
  	this.ngxNotificationService.sendMessage(message, 'success', 'top-right');
  }

  errorMessage(message: string) {
  	this.ngxNotificationService.sendMessage(message, 'danger', 'top-right');
  }
}
