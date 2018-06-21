import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {IngresoComponent} from './ingresoVehiculos/ingresoVehiculo.component';
import {ListaVehiculosParqueados} from './listaVehiculosParqueados/vehiculosparqueados.component';
import {ParqueaderoService} from './services/parqueadero.service';
import { FormsModule } from '@angular/forms'; //Para utilizar el ngModel en la vista
import {HttpModule} from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    IngresoComponent,
    ListaVehiculosParqueados
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ParqueaderoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
