import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import * as constantes from '../../../constantes';

@Component({
  selector: 'app-estimulosform',
  templateUrl: './estimulosform.component.html',
  styleUrls: ['./estimulosform.component.scss']
})
export class EstimulosformComponent implements OnInit {
  constantes = constantes;
  estimulosForm = new FormGroup({
    condecoracionesControl: new FormControl(''),
    felicitacionesControl: new FormControl(''),
    personajeMesControl: new FormControl(''),
    permisosControl: new FormControl(''),
    estatuillasControl: new FormControl(''),
    monedasControl: new FormControl(''),
    capacitacionesControl: new FormControl('')
  });

  constructor() {}

  ngOnInit() {}
}
