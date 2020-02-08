import { Component, OnInit, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormularioNuevoUsuarioInvestigadorService } from 'src/app/services/formulario-nuevo-usuario-investigador.service';
import { NewUser } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.component.html',
  styleUrls: ['./nuevo-usuario.component.scss']
})
export class NuevoUsuarioComponent implements OnInit, AfterViewInit {
  @Output() closeForm = new EventEmitter<any>();
  @Output() createdUser = new EventEmitter<NewUser>();
  newUser = new FormGroup({});
  passwd = new FormControl();
  tipoDoc = ['Cédula de Ciudadanía', 'Cédula de Extrangería', 'Pasaporte'];
  grado = ['Grado 1', 'Grado 2', 'Grado 3'];
  perfil = ['Usuario', 'Administrador'];

  constructor(private formService: FormularioNuevoUsuarioInvestigadorService) {}

  ngOnInit() {
    this.formChanges();
  }

  ngAfterViewInit() {
    this.formValid();
  }

  formValid() {
    this.newUser.statusChanges.subscribe(valid => {});
  }

  formChanges() {
    this.newUser.valueChanges.subscribe(changes => {
      if (this.newUser.contains('passwdControl')) {
        this.passwdConfirm();
      }
      if (this.newUser.contains('Email')) {
        this.newUser.controls.Email.setValidators([Validators.email]);
      }
      this.formService.newUsuarioForm.next({
        ...this.formService.newUsuarioForm.value,
        ...changes
      });
    });
  }

  passwdConfirm() {
    this.passwd.valueChanges.subscribe(value => {
      const passwd = this.newUser.controls.passwdControl.value;
      if (value !== passwd) {
        this.passwd.setErrors({ confirmPasswd: true });
        this.newUser.setErrors({ confirmPasswd: true });
      } else {
        this.passwd.setErrors(null);
        this.newUser.setErrors(null);
      }
    });
  }

  formInitialized(name: string, form: FormControl, extra?: boolean) {
    if (extra) {
      this.passwd = form;
      return;
    }
    this.newUser.setControl(name, form);
  }

  formGroupInitialized(name: string, form: FormGroup, disabled?: boolean) {
    this.newUser.setControl(name, form);
    if (disabled) {
      this.newUser.get(name).disable();
    }
  }

  closeTheForm() {
    this.formService.newInvestigadorForm.next(null);
    this.closeForm.emit();
    this.newUser.reset();
  }

  sendData() {
    this.createdUser.emit(this.newUser.value);
    this.closeTheForm();
  }
}
