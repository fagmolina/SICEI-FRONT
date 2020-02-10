import { Component, OnInit } from '@angular/core';
import { NgxNotificationService } from 'ngx-notification';
import * as constantes from '../../constantes';

@Component({
  selector: 'app-grift-investigacion-implementada',
  templateUrl: './grift-investigacion-implementada.component.html',
  styleUrls: ['./grift-investigacion-implementada.component.scss']
})
export class GriftInvestigacionImplementadaComponent implements OnInit {
  public constantes = constantes;
  public tableData = [{Nombre: 'A', valor: 25},{Nombre: 'b', valor: 35}];

  constructor(private ngxNotificationService: NgxNotificationService) {}

  ngOnInit() {
  }

  sendNotification() {
  	this.ngxNotificationService.sendMessage('This is my message to you!', 'success', 'top-right');
  }
}
