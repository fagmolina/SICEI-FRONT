import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormularioNuevoUsuarioInvestigadorService } from 'src/app/services/formulario-nuevo-usuario-investigador.service';
import { NewInvestigador } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-nuevo-investigador',
  templateUrl: './nuevo-investigador.component.html',
  styleUrls: ['./nuevo-investigador.component.scss']
})
export class NuevoInvestigadorComponent implements OnInit {
  @Output() closeForm = new EventEmitter<any>();
  @Output() createdInvest = new EventEmitter<NewInvestigador>();
  newInvestigator = new FormGroup({
    Dir: new FormControl('', [Validators.required]),
    Estudios: new FormControl('', [Validators.required]),
    Otros: new FormControl('', [Validators.required]),
    Categ: new FormControl('', [Validators.required]),
    Tipo: new FormControl({ value: '', disabled: true }, [Validators.required]),
    Investigador: new FormControl('', [Validators.required]),
    Estudiante: new FormControl('', [Validators.required])
  });
  passwd = new FormControl();
  tipoDoc = ['Cédula de Ciudadanía', 'Cédula de Extrangería', 'Pasaporte'];
  grado = ['Grado 1', 'Grado 2', 'Grado 3'];
  estudios = ['Bachiller', 'Técnico', 'Tecnólogo', 'Pregrado', 'Postgrado', 'Otros'];
  tipoCategorizacion = ['Junior', 'Asociado', 'Senior', 'Emerito'];

  constructor(private formService: FormularioNuevoUsuarioInvestigadorService) {}

  ngOnInit() {
    this.formChanges();
  }

  formChanges() {
    this.newInvestigator.valueChanges.subscribe(changes => {
      if (this.newInvestigator.contains('emailControl')) {
        this.newInvestigator.controls.emailControl.setValidators([Validators.email]);
      }
      this.formService.newInvestigadorForm.next({
        ...this.formService.newInvestigadorForm.value,
        ...changes,
      });
    });
  }

  enableTipo(event) {
    if (event) {
      this.newInvestigator.controls.Tipo.enable();
    } else {
      this.newInvestigator.controls.Tipo.disable();
    }
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
    this.newInvestigator.reset();
  }

  checkOthers() {
    const other = this.newInvestigator.controls.Estudios.value;
    const result = other.indexOf('Otros') === -1;
    if (result) {
      this.newInvestigator.controls.Otros.disable();
    } else {
      this.newInvestigator.controls.Otros.enable();
    }
    return result;
  }

  sendData() {
    this.createdInvest.emit(this.newInvestigator.value);
    this.closeTheForm();
  }
}
