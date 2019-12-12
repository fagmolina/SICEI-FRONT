import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { AutoCompleteData } from 'src/app/interfaces/interfaces';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as constantes from '../../../constantes';
import { fakeData } from '../../../mockData/mockData';

@Component({
  selector: 'app-participantes-two',
  templateUrl: './participantes-two.component.html',
  styleUrls: ['./participantes-two.component.scss']
})
export class ParticipantesTwoComponent implements OnInit {
  @Input() data: AutoCompleteData;
  @Output() formReady = new EventEmitter<FormGroup>();
  constantes = constantes;
  fakeData = fakeData;
  filteredData: Observable<any>;
  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      dataControl: new FormControl('', [Validators.required])
    });
  }

  ngOnInit() {
    this.data.placeholder = 'Participantes?';
    this.formReady.emit(this.form);
    this.form.controls.dataControl.disable();
    this.filteredData = this.form.valueChanges.pipe(
      startWith(''),
      map(value => (typeof value === 'string' ? value : value.name)),
      map(name => (name ? this._filter(name) : this.data.data.slice()))
    );
  }
  display(data): string | undefined {
    return data ? data.name : undefined;
  }
  private _filter(name: string): any[] {
    const filterValue = name.toLowerCase();

    return this.data.data.filter(
      option => option.name.toLowerCase().indexOf(filterValue) >= 0
    );
  }

  checked(event) {
    if (event.checked) {
      this.form.controls.dataControl.enable();
      this.data.placeholder = 'Cuales?';
    } else {
      this.form.controls.dataControl.disable();
      this.data.placeholder = 'Participantes?';
    }
  }
}
