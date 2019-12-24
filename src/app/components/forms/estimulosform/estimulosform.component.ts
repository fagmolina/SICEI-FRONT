import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-estimulosform',
  templateUrl: './estimulosform.component.html',
  styleUrls: ['./estimulosform.component.scss']
})
export class EstimulosformComponent implements OnInit {
  estimulosForm = new FormGroup({});
  
  constructor() {}

  ngOnInit() {}
}
