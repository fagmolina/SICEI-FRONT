import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as constantes from '../../../constantes';
import { fakeTableData } from 'src/app/mockData/mockData';
import { FormularioNuevoUsuarioInvestigadorService } from 'src/app/services/formulario-nuevo-usuario-investigador.service';

@Component({
  selector: 'app-new-investigadores',
  templateUrl: './new-investigadores.component.html',
  styleUrls: ['./new-investigadores.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NewInvestigadoresComponent implements OnInit {
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
