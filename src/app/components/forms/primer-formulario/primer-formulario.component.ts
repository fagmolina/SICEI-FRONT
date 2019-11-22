import { Component, OnInit } from "@angular/core";
import * as constantes from "../../../constantes";
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from "@angular/forms";

@Component({
  selector: "app-primer-formulario",
  templateUrl: "./primer-formulario.component.html",
  styleUrls: ["./primer-formulario.component.scss"]
})
export class PrimerFormularioComponent implements OnInit {
  constantes = constantes;
  primerForm: FormGroup;
  fakeData = [
    {
      postId: 1,
      id: 1,
      name: "id labore ex et quam laborum",
      email: "Eliseo@gardner.biz",
      body:
        "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
    },
    {
      postId: 1,
      id: 2,
      name: "quo vero reiciendis velit similique earum",
      email: "Jayne_Kuhic@sydney.com",
      body:
        "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
    },
    {
      postId: 1,
      id: 3,
      name: "odio adipisci rerum aut animi",
      email: "Nikita@garfield.biz",
      body:
        "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione"
    },
    {
      postId: 1,
      id: 4,
      name: "alias odio sit",
      email: "Lew@alysha.tv",
      body:
        "non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati"
    },
    {
      postId: 1,
      id: 5,
      name: "vero eaque aliquid doloribus et culpa",
      email: "Hayden@althea.biz",
      body:
        "harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et"
    }
  ];

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
