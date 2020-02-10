import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Investigacion } from '../models/investigacion';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public pathapi = 'http://localhost:60406/api/';
  public serviceConsultaInvestigaciones = 'Investigacion/ConsultarInvestigaciones';
  public serviceMergeInvestigacion = 'Investigacion/MergeInvestigacion';

  constructor(private http: HttpClient) { }

  protected generateBasicHeaders(): HttpHeaders{
    return new HttpHeaders({
      'Content-type': 'application/json'
    });
  }

  public consultarInvestigaciones() {
    return this.http.get(this.pathapi + this.serviceConsultaInvestigaciones, {
      headers: this.generateBasicHeaders()
    });
  }

  public mergeInvestigacion(investigacion: Investigacion){
    return this.http.post(this.pathapi + this.serviceMergeInvestigacion, investigacion, {
      headers: this.generateBasicHeaders()
    });
  }
}
