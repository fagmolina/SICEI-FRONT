import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

//#region Material
import { MatCardModule,
         MatButtonModule,
         MatFormFieldModule,
         MatIconModule,
         MatInputModule,
         MatToolbarModule,
         MatMenuModule,
         MatAutocompleteModule,
         MatDatepickerModule,
         MatNativeDateModule,
         MatRadioModule,
         MatChipsModule,
         MatStepperModule,
         MatCheckboxModule,
         MatTooltipModule,
         MatDividerModule,
         MatExpansionModule,
         MatSelectModule,
         MatSlideToggleModule} from '@angular/material';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import {MatTableModule} from '@angular/material/table';
//#endregion Material

//#region Components imports
import { MainComponent } from './pages/main/main.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { MainMenuItemComponent } from './components/main-menu-item/main-menu-item.component';
import { MenuTogglerComponent } from './components/menu-toggler/menu-toggler.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { UserMenuComponent } from './components/user-menu/user-menu.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CarouselItemComponent } from './components/carousel/carousel-item/carousel-item.component';
import { PrimerFormularioComponent } from './components/forms/primer-formulario/primer-formulario.component';
import { SimpleInputComponent } from './components/commons/simple-input/simple-input.component';
import { AutcompleteComponent } from './components/commons/autcomplete/autcomplete.component';
import { ParticipacionFormComponent } from './components/participacion-form/participacion-form.component';
import { ChipAutocompleteComponent } from './components/commons/chip-autocomplete/chip-autocomplete.component';
import { FooterComponent } from './components/footer/footer.component';
import { InvestigadoresComponent } from './components/investigadores/investigadores.component';
import { InvestigadoresDialogComponent } from './components/dialogs/investigadores-dialog/investigadores-dialog.component';
import { ProductoInvesFormComponent } from './components/forms/producto-inves-form/producto-inves-form.component';
import { ArticuloFormComponent } from './components/forms/articulo-form/articulo-form.component';
import { LibroFormComponent } from './components/forms/libro-form/libro-form.component';
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
import { HomeComponent } from './pages/home/home.component';
import { PageTitleComponent } from './components/commons/page-title/page-title.component';
import { TableComponent } from './components/commons/table/table.component';
import { FormularioAreasLineasComponent } from './components/forms/formulario-areas-lineas/formulario-areas-lineas.component';
import { ParticipantesTwoComponent } from './components/forms/participantes-two/participantes-two.component';
import { DetallesFormComponent } from './components/forms/detalles-form/detalles-form.component';
import { EstimulosformComponent } from './components/forms/estimulosform/estimulosform.component';
import { EventosFormComponent } from './components/forms/eventos-form/eventos-form.component';
import { SelectComponent } from './components/commons/select/select.component';
import { PresupuestoAsignadoComponent } from './components/forms/presupuesto-asignado/presupuesto-asignado.component';
import { GriftFormConfirmComponent } from './components/grift-form-confirm/grift-form-confirm.component';
import { GriftSaveCancelComponent } from './components/dialogs/grift-save-cancel/grift-save-cancel.component';
import { UsuariosComponent } from './pages/administracion/usuarios/usuarios.component';
import { NuevoUsuarioComponent } from './components/forms/nuevo-usuario/nuevo-usuario.component';
import { UnidadesComponent } from './pages/administracion/unidades/unidades.component';
import { NewInvestigadoresComponent } from './pages/administracion/new-investigadores/new-investigadores.component';
//#endregion Components imports

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    MainMenuComponent,
    MainMenuItemComponent,
    MenuTogglerComponent,
    NavBarComponent,
    UserMenuComponent,
    CarouselComponent,
    CarouselItemComponent,
    PrimerFormularioComponent,
    SimpleInputComponent,
    AutcompleteComponent,
    ParticipacionFormComponent,
    ChipAutocompleteComponent,
    FooterComponent,
    InvestigadoresComponent,
    InvestigadoresDialogComponent,
    ProductoInvesFormComponent,
    ArticuloFormComponent,
    LibroFormComponent,
    GriftInvestigacionInstitucionalComponent,
    GriftInvestigacionImplementadaComponent,
    GriftCasoEmblematicoComponent,
    GriftSemillerosInvestigacionComponent,
    GriftRedesInvestigacionComponent,
    GriftCategorizacionColcienciasComponent,
    GreitPropiedadIntelectualComponent,
    GreitInvestigacionInstitucionalComponent,
    GreitInvestigacionImplementadaComponent,
    GrindRLCTComponent,
    GrindLRIComponent,
    AdministracionComponent,
    HomeComponent,
    PageTitleComponent,
    TableComponent,
    FormularioAreasLineasComponent,
    ParticipantesTwoComponent,
    DetallesFormComponent,
    EstimulosformComponent,
    EventosFormComponent,
    SelectComponent,
    PresupuestoAsignadoComponent,
    GriftFormConfirmComponent,
    GriftSaveCancelComponent,
    UsuariosComponent,
    NuevoUsuarioComponent,
    UnidadesComponent,
    NewInvestigadoresComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    // Angular Material
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMomentDateModule,
    MatRadioModule,
    MatChipsModule,
    MatStepperModule,
    MatTableModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatDividerModule,
    MatExpansionModule,
    MatStepperModule,
    MatSelectModule,
    MatSlideToggleModule,

    ReactiveFormsModule,
    FormsModule,

    AppRoutingModule
  ],
  entryComponents: [InvestigadoresDialogComponent, GriftSaveCancelComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
