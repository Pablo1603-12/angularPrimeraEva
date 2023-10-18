import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AsignaturaComponent } from './asignatura/asignatura.component';
import { PreguntaComponent } from './pregunta/pregunta.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AsignaturaComponent,
    PreguntaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
