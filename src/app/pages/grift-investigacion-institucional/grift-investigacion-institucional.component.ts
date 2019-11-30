import { Component, OnInit } from '@angular/core';
import * as constantes from '../../constantes';

@Component({
  selector: 'app-grift-investigacion-institucional',
  templateUrl: './grift-investigacion-institucional.component.html',
  styleUrls: ['./grift-investigacion-institucional.component.scss']
})
export class GriftInvestigacionInstitucionalComponent implements OnInit {
  constantes = constantes;

  constructor() { }

  ngOnInit() {
  }

}
