import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { Plato1Component } from './plato1/plato1.component';
import { Plato2Component } from './plato2/plato2.component';
import { Plato3Component } from './plato3/plato3.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    Plato1Component,
    Plato2Component,
    Plato3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
