import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import * as constantes from '../../constantes';
import { investigadores } from '../../mockData/mockData';
import { fakeData } from '../../mockData/mockData';
import { DialogService } from 'src/app/services/dialog.service';
import { FormularioGRIFTService } from 'src/app/services/formulario-grift.service';
import { MatTableDataSource } from '@angular/material';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-nuevo-caso-emblematico',
  templateUrl: './nuevo-caso-emblematico.component.html',
  styleUrls: ['./nuevo-caso-emblematico.component.scss']
})
export class NuevoCasoEmblematicoComponent implements OnInit {
  public constantes = constantes;
  public form: FormGroup;
  fakeData = fakeData;

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
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.investigadores = investigadores;
    this.dataSource = new MatTableDataSource();
    this.form = this.fb.group({
      investigadores: new FormControl({ value: this.tableData, disabled: false}, Validators.required)
    });
    this.getInvestigadores();
  }

  formInitialized(name: string, form: FormControl) {
    this.form.setControl(name, form);
  }

  // checkDataValid(data) {
  //   if (data) {
  //     this.formService.griftStepper.next({
  //       ...this.formService.griftStepper.value,
  //       stepTwo: data.length > 0
  //     });
  //     this.formService.theForm.next({
  //       ...this.formService.theForm.value,
  //       investigadores: data.length > 0 ? this.dataSource.data : null
  //     });
  //   }
  // }
  getInvestigadores(){
    this.dataService.consultarInvestigadores().subscribe((data: any) => {
      console.log(data);
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
    // this.checkDataValid(this.dataSource.data);
  }
}
