import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { Tipo } from 'src/app/models/tipo';
import { Unidad } from 'src/app/models/unidad';
import { error } from 'protractor';
import { NgxNotificationService } from 'ngx-notification';

@Component({
  selector: 'app-nueva-unidad',
  templateUrl: './nueva-unidad.component.html',
  styleUrls: ['./nueva-unidad.component.scss']
})
export class NuevaUnidadComponent implements OnInit {
  @Output() sigla = new EventEmitter<any>();
  newUnidad = new FormGroup({
    Sigla: new FormControl('', [Validators.required]),
    Descripcion: new FormControl('', [Validators.required]),
    Tipo: new FormControl('', [Validators.required])
  });
  // tipos = ['Escuela', 'Dirección', 'Oficina ASC'];
  tipos;

  constructor(
    private dataService: DataService,
    private ngxNotificationService: NgxNotificationService
  ) {}

  ngOnInit() {
    this.getTipos();
  }

  getTipos(){
    this.dataService.getConsultaTipos().subscribe(data => {
      this.tipos = <Tipo[]>data;
    },
    error =>{
      console.log('Error');
    });
  }

  enviarSigla() {
    let unidad = new Unidad();
    unidad.DESCRIPCION = this.newUnidad.value.Descripcion;
    unidad.ID_TIPO = this.newUnidad.value.Tipo.ID_TIPO;
    unidad.ID_UNIDAD = 0;
    unidad.SIGLA = this.newUnidad.value.Sigla;

    this.dataService.postMergeUnidad(unidad).subscribe(data => {
      if(data == 'OK'){
        this.sigla.emit({ '#': null, ...this.newUnidad.value });
        this.reset();
        this.successMessage('Unidad creada exitosamente');
      }
    },
    error => {
      this.errorMessage('Error al crear la unidad');
    });
  }

  reset() {
    this.newUnidad.reset();
  }

  successMessage(message: string) {
  	this.ngxNotificationService.sendMessage(message, 'success', 'top-right');
  }

  errorMessage(message: string) {
  	this.ngxNotificationService.sendMessage(message, 'danger', 'top-right');
  }
}
