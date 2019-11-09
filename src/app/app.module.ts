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
         MatNativeDateModule} from '@angular/material';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
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
    AutcompleteComponent
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
    MatNativeDateModule, MatMomentDateModule,

    ReactiveFormsModule,
    FormsModule,

    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
