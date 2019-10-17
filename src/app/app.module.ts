import { BrowserModule } from '@angular/platform-browser';
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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    
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
