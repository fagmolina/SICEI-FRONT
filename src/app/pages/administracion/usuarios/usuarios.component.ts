import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { fakeTableData } from 'src/app/mockData/mockData';
import * as constantes from '../../../constantes';
import { FormularioNuevoUsuarioInvestigadorService } from 'src/app/services/formulario-nuevo-usuario-investigador.service';

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

  constructor(private formService: FormularioNuevoUsuarioInvestigadorService) {}

  ngOnInit() {}

  closeTheForm() {
    this.formService.newUsuarioForm.next(null);
    this.new = !this.new;
  }
}
