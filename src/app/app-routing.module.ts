// tslint:disable: max-line-length
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { GriftInvestigacionInstitucionalComponent } from './pages/grift-investigacion-institucional/grift-investigacion-institucional.component';
import { GriftInvestigacionImplementadaComponent } from './pages/grift-investigacion-implementada/grift-investigacion-implementada.component';
import { GriftCasoEmblematicoComponent } from './pages/grift-caso-emblematico/grift-caso-emblematico.component';
import { GriftSemillerosInvestigacionComponent } from './pages/grift-semilleros-investigacion/grift-semilleros-investigacion.component';
import { GriftRedesInvestigacionComponent } from './pages/grift-redes-investigacion/grift-redes-investigacion.component';
import { GriftCategorizacionColcienciasComponent } from './pages/grift-categorizacion-colciencias/grift-categorizacion-colciencias.component';
import { GreitPropiedadIntelectualComponent } from './pages/greit-propiedad-intelectual/greit-propiedad-intelectual.component';
import { GreitInvestigacionInstitucionalComponent } from './pages/greit-investigacion-institucional/greit-investigacion-institucional.component';
import { GreitInvestigacionImplementadaComponent } from './pages/greit-investigacion-implementada/greit-investigacion-implementada.component';
import { GrindRLCTComponent } from './pages/grind-rlct/grind-rlct.component';
import { GrindLRIComponent } from './pages/grind-lri/grind-lri.component';
import { AdministracionComponent } from './pages/administracion/administracion.component';
import { UsuariosComponent } from './pages/administracion/usuarios/usuarios.component';
import { LoginComponent } from './pages/login/login.component';

import { UnidadesComponent } from './pages/administracion/unidades/unidades.component';
import { NewInvestigadoresComponent } from './pages/administracion/new-investigadores/new-investigadores.component';
import { GraficaProductosComponent } from './components/grafica-productos/grafica-productos.component';
import { GraficaComponent } from './components/grafica/grafica.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, pathMatch: 'full' },
  { path: 'investigacion-institucional', component: GriftInvestigacionInstitucionalComponent },
  { path: 'investigacion-implementada', component: GriftInvestigacionImplementadaComponent },
  { path: 'caso-emblematico', component: GriftCasoEmblematicoComponent },
  { path: 'semilleros-investigacion', component: GriftSemillerosInvestigacionComponent },
  { path: 'redes-investigacion', component: GriftRedesInvestigacionComponent },
  { path: 'categorizacion-colciencias', component: GriftCategorizacionColcienciasComponent },
  { path: 'propiedad-intelectual', component: GreitPropiedadIntelectualComponent },
  { path: 'greit-investigcion-institucional', component: GreitInvestigacionInstitucionalComponent },
  { path: 'greit-investigacion-implementada', component: GreitInvestigacionImplementadaComponent },
  { path: 'rlct', component: GrindRLCTComponent },
  { path: 'lri', component: GrindLRIComponent },
  { path: 'administracion', component: AdministracionComponent },
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'newinvestigadores', component: NewInvestigadoresComponent },
  { path: 'unidades', component: UnidadesComponent },
  { path: 'grafica-productos', component: GraficaProductosComponent },
  { path: 'grafica-investigaciones', component: GraficaComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
