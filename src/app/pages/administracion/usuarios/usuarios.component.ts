import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { fakeTableData } from 'src/app/mockData/mockData';
import * as constantes from '../../../constantes';
import { FormularioNuevoUsuarioInvestigadorService } from 'src/app/services/formulario-nuevo-usuario-investigador.service';
import { DataService } from 'src/app/services/data.service';
import { User } from 'src/app/models/user.class';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UsuariosComponent implements OnInit {
  public constantes = constantes;
  public new = false;
  public fakeTableData = fakeTableData;
  public tableData = [];

  constructor(
    private formService: FormularioNuevoUsuarioInvestigadorService,
    private dataService: DataService
    ) {}

  ngOnInit() {
    this.getUsuarios();
  }

  closeTheForm() {
    this.formService.newUsuarioForm.next(null);
    this.new = !this.new;
  }

  addTableData(data) {
    // this.tableData = [...this.tableData, data];
    this.getUsuarios();
  }

  getUsuarios(){
    this.tableData = [];
    this.dataService.getConsultaUsuarios().subscribe(data => {
      let usuarios = <User[]>data;
      this.tableData = usuarios.map(item => {
        return {
          DOCUMENTO: item.DOCUMENTO,
          USUARIO: item.USUARIO,
          NOMBRES: item.NOMBRES,
          APELLIDOS: item.APELLIDOS,
          EMAIL: item.EMAIL,
          TELEFONO: item.TELEFONO
        }
      });
    },
    error => {
      console.log('Error');
      console.log(error);
    });
  }
}
