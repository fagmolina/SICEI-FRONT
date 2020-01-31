import { Component, OnInit, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormularioNuevoUsuarioInvestigadorService } from 'src/app/services/formulario-nuevo-usuario-investigador.service';

@Component({
  selector: 'app-nuevo-investigador',
  templateUrl: './nuevo-investigador.component.html',
  styleUrls: ['./nuevo-investigador.component.scss']
})
export class NuevoInvestigadorComponent implements OnInit, AfterViewInit {
  @Output() closeForm = new EventEmitter<any>();
  newInvestigator = new FormGroup({
    direccionControl: new FormControl('', [Validators.required]),
    estudiosControl: new FormControl('', [Validators.required]),
    otrosEstudiosControls: new FormControl('')
  });
  passwd = new FormControl();
  tipoDoc = ['Cédula de Ciudadanía', 'Cédula de Extrangería', 'Pasaporte'];
  grado = ['Grado 1', 'Grado 2', 'Grado 3'];
  estudios = ['Bachiller', 'Técnico', 'Tecnólogo', 'Pregrado', 'Postgrado', 'Otros'];

  constructor(private formService: FormularioNuevoUsuarioInvestigadorService) {}

  ngOnInit() {
    this.formChanges();
  }

  ngAfterViewInit() {
    this.formValid();
  }

  formValid() {
    this.newInvestigator.statusChanges.subscribe(valid => {});
  }

  formChanges() {
    this.newInvestigator.valueChanges.subscribe(changes => {
      this.formService.newInvestigadorForm.next({
        ...this.formService.newInvestigadorForm.value,
        ...changes
      });
    });
  }

  formInitialized(name: string, form: FormControl, extra?: boolean) {
    if (extra) {
      this.passwd = form;
      return;
    }
    this.newInvestigator.setControl(name, form);
  }

  formGroupInitialized(name: string, form: FormGroup, disabled?: boolean) {
    this.newInvestigator.setControl(name, form);
    if (disabled) {
      this.newInvestigator.get(name).disable();
    }
  }

  closeTheForm() {
    this.formService.newInvestigadorForm.next(null);
    this.closeForm.emit();
  }

  checkOthers() {
    const other = this.newInvestigator.controls.estudiosControl.value;
    console.log(other.indexOf('Otros') === -1);
    return other.indexOf('Otros') === -1;
  }
}
