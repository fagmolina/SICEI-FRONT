import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import * as constantes from '../../constantes';
import { investigadores } from '../../mockData/mockData';
import { fakeData } from '../../mockData/mockData';
import { DialogService } from 'src/app/services/dialog.service';
import { FormularioGRIFTService } from 'src/app/services/formulario-grift.service';
import { MatTableDataSource } from '@angular/material';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { CasosEmblematicoSet } from 'src/app/models/caso-emblematico';
import { ComponentsService } from 'src/app/services/components.service';
import { NgxNotificationService } from 'ngx-notification';

@Component({
  selector: 'app-nuevo-caso-emblematico',
  templateUrl: './nuevo-caso-emblematico.component.html',
  styleUrls: ['./nuevo-caso-emblematico.component.scss']
})
export class NuevoCasoEmblematicoComponent implements OnInit {
  public constantes = constantes;
  public form: FormGroup;
  fakeData = fakeData;
  public hasInvestigadores: boolean;

  investigadores;
  displayedNames: string[] = ['Grado', 'C.C.', 'Nombres', 'Acciones'];
  displayedColumns: string[] = ['grade', 'id', 'name', 'actions'];
  displayedColumnsA = [...this.displayedColumns].splice(0, 3);
  displayedColumnsB = [...this.displayedColumns].splice(3, 1);
  dataSource;
  tableData: any[] = [];
  
  constructor(
    private fb: FormBuilder,
    private dialogService: DialogService,
    private dataService: DataService,
    private _componentService: ComponentsService,
    private ngxNotificationService: NgxNotificationService
  ) { 
    this.hasInvestigadores = false;
  }

  ngOnInit() {
    // this.investigadores = investigadores;
    this.dataSource = new MatTableDataSource();
    this.form = this.fb.group({
      investigadores: new FormControl({ value: this.tableData, disabled: false}, )
    });
    this.getInvestigadores();
  }

  formInitialized(name: string, form: FormControl) {
    this.form.setControl(name, form);
  }

  getInvestigadores(){
    this.dataService.consultarInvestigadores().subscribe((data: any) => {
      this.investigadores = data.map(item => {
        return {
          id: item.ID_INVESTIGADOR,
          name: item.NOMBRES + ' ' + item.APELLIDOS
        }
      });
    });
  }

  newInvestigator() {
    const data = {
      data:
        this.tableData.length === 0
          ? this.investigadores
          : this.investigadores.filter(s => !this.tableData.includes(s))
    };
    this.dialogService.openDialog(1, data).subscribe(dialogResponse => {
      if (dialogResponse) {
        this.tableData.push(dialogResponse);
        this.dataSource.data = this.tableData;
        console.log(this.form);
        this.haveInvestigadores();
        // this.checkDataValid(this.dataSource.data);
      }
    });
  }

  remove(element, index) {
    const tempArray = [
      ...this.dataSource.data.filter((v, i) => {
        return i !== index;
      })
    ];
    this.dataSource.data = tempArray;
    this.tableData = tempArray;
    this.form.get("investigadores").setValue(tempArray);
    this.haveInvestigadores();
    // this.checkDataValid(this.dataSource.data);
  }

  haveInvestigadores(){
    this.hasInvestigadores = this.form.get("investigadores").value.length > 0 ? true : false;
    console.log(this.form.get("investigadores").value);
    console.log(this.tableData);
  }

  save(){
    let nuevoCaso = new CasosEmblematicoSet();
    nuevoCaso.ACTIVIDADES = this.form.get("actividades").value;
    nuevoCaso.LUGAR_AFECTACION = this.form.get("lugarAfectacionControl").value;
    nuevoCaso.NOMBRE_CASO = this.form.get("nombreCasoControl").value;
    nuevoCaso.INVESTIGADORES = <[]>[...new Set(this.form.get("investigadores").value.map(item => item.id))];
    console.log(nuevoCaso);

    this.dataService.mergeCasoEmblematico(nuevoCaso).subscribe(data => {
      this.successMessage("Caso guardado con éxito");
      this._componentService.newCasoEmblematico.next(false);
    },
    error => {
      this.errorMessage("Error al guardar el caso");
      this._componentService.newCasoEmblematico.next(false);
    });
  }

  successMessage(message: string) {
  	this.ngxNotificationService.sendMessage(message, 'success', 'top-right');
  }

  errorMessage(message: string) {
  	this.ngxNotificationService.sendMessage(message, 'danger', 'top-right');
  }
}
