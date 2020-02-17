import { Component, OnInit } from '@angular/core';
import * as constantes from '../../constantes';
import { fakeData } from 'src/app/mockData/mockData';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ComponentsService } from 'src/app/services/components.service';

@Component({
  selector: 'app-grift-redes-investigacion',
  templateUrl: './grift-redes-investigacion.component.html',
  styleUrls: ['./grift-redes-investigacion.component.scss']
})
export class GriftRedesInvestigacionComponent implements OnInit {
  public constantes = constantes;
  public fakeData = fakeData;
  public form: FormGroup;
  public new = false;

  public tableData = [{Nombre: 'A', valor: 25},{Nombre: 'b', valor: 35}];

  constructor(
    private _componentService: ComponentsService
  ) { }

  ngOnInit() {
    this._componentService.newRedInvestigacion.subscribe(
      data => {
        this.new = <boolean>data;
      }
    );
  }

  setNew(){
    this.new = !this.new;
    this._componentService.newRedInvestigacion.next(this.new);
  }

  formInitialized(name: string, form: FormControl) {
    this.form.setControl(name, form);
  }
}
