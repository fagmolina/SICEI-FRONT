import { Component, OnInit } from "@angular/core";
import * as constantes from "../../../constantes";
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from "@angular/forms";
import { fakeData } from '../../../mockData/mockData';

@Component({
  selector: "app-primer-formulario",
  templateUrl: "./primer-formulario.component.html",
  styleUrls: ["./primer-formulario.component.scss"]
})
export class PrimerFormularioComponent implements OnInit {
  constantes = constantes;
  primerForm: FormGroup;
  fakeData = fakeData;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.primerForm = this.fb.group({
      yearControl: new FormControl(
        { value: "", disabled: false },
        Validators.required
      )
    });
  }

  formInitialized(name: string, form: FormControl) {
    this.primerForm.setControl(name, form);
  }

  formGroupInitialized(name: string, form: FormGroup, disabled?: boolean) {
    this.primerForm.setControl(name, form);
    if (disabled) {
      this.primerForm.get(name).disable();
    }
  }

  participantes(evento) {
    console.log(evento);
    if (evento.value === "1") {
      this.primerForm.get("participantesControl").enable();
    } else {
      this.primerForm.get("participantesControl").disable();
    }
  }
}
