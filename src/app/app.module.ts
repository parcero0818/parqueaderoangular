import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {IngresoComponent} from './ingresoVehiculos/ingresoVehiculo.component';
import {ListaVehiculosParqueados} from './listaVehiculosParqueados/vehiculosparqueados.component';
import {ParqueaderoService} from './services/parqueadero.service';

import {HttpModule} from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    IngresoComponent,
    ListaVehiculosParqueados
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [ParqueaderoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
