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

  constructor(private formService: FormularioGRIFTService) {}

  ngOnInit() {
    this.eventosForm = new FormGroup({
      departamentosControl: new FormControl('', Validators.required),
      ciudadControl: new FormControl('', Validators.required)
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

      // Guardar datos en el form
      this.formService.theForm.next({
        ...this.formService.theForm.value,
        eventos: {
          departamento: this.eventosForm.controls.departamentosControl.value.departamento,
          ciudad: this.eventosForm.controls.ciudadControl.value
        }
      });
    });
  }

  formInitialized(name: string, form: FormControl) {
    this.eventosForm.setControl(name, form);
  }
}
