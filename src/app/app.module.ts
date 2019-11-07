import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';

// Angular Material
import { MatCardModule, 
         MatButtonModule, 
         MatFormFieldModule,
         MatIconModule,
         MatInputModule,
         MatToolbarModule,
         MatMenuModule} from '@angular/material';
import { MainComponent } from './pages/main/main.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { MainMenuItemComponent } from './components/main-menu-item/main-menu-item.component';
import { MenuTogglerComponent } from './components/menu-toggler/menu-toggler.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { UserMenuComponent } from './components/user-menu/user-menu.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CarouselItemComponent } from './components/carousel/carousel-item/carousel-item.component'

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
    CarouselItemComponent
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

    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
