import { Component, OnInit, Input } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { AutoCompleteData } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-autcomplete',
  templateUrl: './autcomplete.component.html',
  styleUrls: ['./autcomplete.component.scss']
})
export class AutcompleteComponent implements OnInit {
  @Input() data: AutoCompleteData;
  filteredData: Observable<any>;
  dataControl = new FormControl('', Validators.required);

  constructor() { }

  ngOnInit() {
    this.filteredData = this.dataControl.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter(name) : this.data.data.slice())
      );
  }
  display(data): string | undefined {
    return data ? data.name : undefined;
  }
  private _filter(name: string): any[] {
    const filterValue = name.toLowerCase();

    return this.data.data.filter(option => option.name.toLowerCase().indexOf(filterValue) >= 0);
  }
}
