import { Component, OnInit } from '@angular/core';
import * as constantes from '../../constantes';
import { fakeData } from 'src/app/mockData/mockData';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-grift-caso-emblematico',
  templateUrl: './grift-caso-emblematico.component.html',
  styleUrls: ['./grift-caso-emblematico.component.scss']
})
export class GriftCasoEmblematicoComponent implements OnInit {
  public constantes = constantes;
  public fakeData = fakeData;
  public new = false;

  public tableData = [{Nombre: 'A', valor: 25},{Nombre: 'b', valor: 35}];

  constructor() { }

  ngOnInit() {
  }
}
