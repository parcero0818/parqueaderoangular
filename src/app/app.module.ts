import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {IngresoComponent} from './ingresoVehiculos/ingresoVehiculo.component';

@NgModule({
  declarations: [
    AppComponent,
    IngresoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
