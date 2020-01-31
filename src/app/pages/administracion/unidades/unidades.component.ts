import { Component, OnInit } from '@angular/core';
import * as constantes from '../../../constantes';
import { fakeTableData } from 'src/app/mockData/mockData';
import { FormularioNuevoUsuarioInvestigadorService } from 'src/app/services/formulario-nuevo-usuario-investigador.service';

@Component({
  selector: 'app-unidades',
  templateUrl: './unidades.component.html',
  styleUrls: ['./unidades.component.scss']
})
export class UnidadesComponent implements OnInit {
  public constantes = constantes;
  public new = false;
  public fakeTableData = fakeTableData;

  constructor(private formService: FormularioNuevoUsuarioInvestigadorService) {}

  ngOnInit() {}

  closeTheForm() {
    this.formService.newInvestigadorForm.next(null);
    this.new = !this.new;
  }
}
