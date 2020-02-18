import { Component, OnInit, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormularioNuevoUsuarioInvestigadorService } from 'src/app/services/formulario-nuevo-usuario-investigador.service';
import { NewUser } from 'src/app/interfaces/interfaces';
import { DataService } from 'src/app/services/data.service';
import { User } from 'src/app/models/user.class';
import { NgxNotificationService } from 'ngx-notification';

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
  tipoDoc = [
    {ID_TIPO_DOCUMENTO: '1', DESCRIPCION: 'TARJETA DE IDENTIDAD'},
    {ID_TIPO_DOCUMENTO: '2', DESCRIPCION: 'CEDULA CIUDADANIA'},
    {ID_TIPO_DOCUMENTO: '3', DESCRIPCION: 'PASAPORTE'},
    {ID_TIPO_DOCUMENTO: '4', DESCRIPCION: 'CEDULA EXTRANJERIA'}
    ];
  // grado = ['Grado 1', 'Grado 2', 'Grado 3'];
  grado;
  unidades;
  perfil = ['Usuario', 'Administrador'];

  constructor(
    private formService: FormularioNuevoUsuarioInvestigadorService,
    private dataService: DataService,
    private ngxNotificationService: NgxNotificationService
    ) {}

  ngOnInit() {
    this.getGrados();
    this.getUnidades();
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

  getGrados(){
    this.dataService.getConsultaGrados().subscribe(data => {
      this.grado = data;
    },
    error => {
      console.log('Error');
      console.log(error);
    });
  }

  getUnidades(){
    this.dataService.getConsultaUnidades().subscribe(data => {
      this.unidades = data;
    },
    error => {
      console.log('Error');
      console.log(error);
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
    let user = new User();
    debugger;
    user.APELLIDOS = this.newUser.value.Apellido;
    user.CONTRASENA = this.newUser.value.passwdControl;
    user.DOCUMENTO = this.newUser.value.Documento;
    user.EMAIL = this.newUser.value.Email;
    user.ID_GRADO = this.newUser.value.Grado.ID_GRADO;
    user.ID_TIPO_DOCUMENTO = this.newUser.value.Tipo_Doc.ID_TIPO_DOCUMENTO;
    user.ID_UNIDAD = this.newUser.value.Unidad.ID_UNIDAD;
    user.ID_USUARIO = 0;
    user.NOMBRES = this.newUser.value.Nombres;
    user.PERFIL = this.newUser.value.Perfil == 'Administrador' ? 1 : 2;
    user.TELEFONO = this.newUser.value.Tlf;
    user.USUARIO = this.newUser.value.PSI;

    this.dataService.crearModificarUsuario(user).subscribe(data => {
      console.log(data);
      if(data == 'OK'){
        this.createdUser.emit(this.newUser.value);
        this.successMessage('Usuario creado exitosamente');
        this.closeTheForm(); 
      }
    },
    error =>{
      this.errorMessage('Error al crear el usuario');
    });
  }

  successMessage(message: string) {
  	this.ngxNotificationService.sendMessage(message, 'success', 'top-right');
  }

  errorMessage(message: string) {
  	this.ngxNotificationService.sendMessage(message, 'danger', 'top-right');
  }
}
