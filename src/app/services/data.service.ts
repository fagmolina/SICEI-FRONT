import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Investigacion } from '../models/investigacion';
import { CasosEmblematicoSet } from '../models/caso-emblematico';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public pathapi = 'http://localhost:60406/api/';
  public serviceConsultaInvestigaciones = 'Investigacion/ConsultarInvestigaciones';
  public serviceMergeInvestigacion = 'Investigacion/MergeInvestigacion';
  public serviceConsultarInvestigadores = 'Investigacion/ConsultarInvestigadores';


  public serviceMergeCasoEmblematico = 'casoEmblem/MergeCasoEmblematico';
  public serviceGetCasosEmblematicos = 'casoEmblem/ConsultarCasosEmblem';

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

  public consultarInvestigadores(){
    return this.http.get(this.pathapi + this.serviceConsultarInvestigadores, {
      headers: this.generateBasicHeaders()
    });
  }



  //Caso Emblemático
  public getCasosEmblematicos(){
    return this.http.get(this.pathapi + this.serviceGetCasosEmblematicos, {
      headers: this.generateBasicHeaders()
    })
  }

  public mergeCasoEmblematico(caso: CasosEmblematicoSet){
    return this.http.post(this.pathapi + this.serviceMergeCasoEmblematico, caso, {
      headers: this.generateBasicHeaders()
    });
  }
}
