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
         MatInputModule} from '@angular/material';
import { MainComponent } from './pages/main/main.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { MainMenuItemComponent } from './components/main-menu-item/main-menu-item.component';
import { MenuTogglerComponent } from './components/menu-toggler/menu-toggler.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    MainMenuComponent,
    MainMenuItemComponent,
    MenuTogglerComponent
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

    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
