import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as constantes from '../../../constantes';
import { colombia } from '../../../jsonColombia/colombia';
import { paises } from '../../../paises/paises';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormularioGRIFTService } from 'src/app/services/formulario-grift.service';

@Component({
  selector: 'app-eventos-form',
  templateUrl: './eventos-form.component.html',
  styleUrls: ['./eventos-form.component.scss']
})
export class EventosFormComponent implements OnInit, AfterViewInit {
  constantes = constantes;
  colombia = colombia;
  paises = paises;
  eventosForm: FormGroup;
  departamento: string[];
  tipo: string[] = ['Seminario', 'Simposio', 'Foro', 'Panel', 'Conversatorio', 'Encuentro'];
  participacion: string[] = ['Asistente', 'Ponente', 'Organizador'];
  national = false;

  constructor(private formService: FormularioGRIFTService) {}

  ngOnInit() {
    this.eventosForm = new FormGroup({
      departamentosControl: new FormControl('', Validators.required),
      ciudadControl: new FormControl('', Validators.required),
      fechaControl: new FormControl('', Validators.required),
      tipoControl: new FormControl('', Validators.required),
      participacionControl: new FormControl('', Validators.required),
      nationalControl: new FormControl('')
    });
    this.formChanges();
  }

  ngAfterViewInit() {
    this.formValid();
  }

  formValid() {
    this.eventosForm.statusChanges.subscribe(valid => {
      this.formService.griftStepper.next({
        ...this.formService.griftStepper.value,
        stepOne: valid === 'VALID'
      });
    });
  }

  formChanges() {
    this.eventosForm.valueChanges.subscribe(changes => {
      this.departamento = changes.departamentosControl.ciudades;
      const form = this.eventosForm.controls;
      // Guardar datos en el form
      this.formService.theForm.next({
        ...this.formService.theForm.value,
        eventos: {
          tipo: form.tipoControl.value,
          participacion: form.participacionControl.value,
          departamento: this.national ? null : form.departamentosControl.value.departamento,
          pais: this.national ? form.paisesControl.value.nombre : null,
          ciudad: form.ciudadControl.value,
          fecha: form.fechaControl.value,
          lugar: form.nationalControl.value ? 'Internacional' : 'Nacional'
        }
      });
    });
  }

  formInitialized(name: string, form: FormControl) {
    this.eventosForm.setControl(name, form);
  }

  test(event) {
    console.log(event);
  }
}
