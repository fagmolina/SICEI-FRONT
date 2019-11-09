import { Component, OnInit, Input } from '@angular/core';
import { InputData } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-simple-input',
  templateUrl: './simple-input.component.html',
  styleUrls: ['./simple-input.component.scss']
})
export class SimpleInputComponent implements OnInit {
  @Input() data: InputData;

  constructor() { }

  ngOnInit() {
  }

}
