import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { AutoCompleteData } from 'src/app/interfaces/interfaces';
import * as constantes from '../../../constantes';

@Component({
  selector: 'app-autcomplete',
  templateUrl: './autcomplete.component.html',
  styleUrls: ['./autcomplete.component.scss']
})
export class AutcompleteComponent implements OnInit {
  @Input() data: AutoCompleteData;
  @Output() formReady = new EventEmitter<FormControl>();
  constantes = constantes;
  filteredData: Observable<any>;
  dataControl = new FormControl('', Validators.required);

  constructor() {}

  ngOnInit() {
    this.formReady.emit(this.dataControl);
    this.filteredData = this.dataControl.valueChanges.pipe(
      startWith(''),
      map(value => (typeof value === 'string' ? value : value[this.data.argument])),
      map(name => (name ? this._filter(name) : this.data.data.slice()))
    );
  }
  display(data): string | undefined {
    return data ? data[this.data.argument] : undefined;
  }
  private _filter(name: string): any[] {
    const filterValue = name.toLowerCase();

    return this.data.data.filter(
      option => option[this.data.argument].toLowerCase().indexOf(filterValue) >= 0
    );
  }
}
