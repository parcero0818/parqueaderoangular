import {Component, ViewChild} from '@angular/core';
import {ParqueaderoService} from '../services/parqueadero.service';
import {factura} from './factura';

@Component({
  selector: 'salidaVehiculo',  //etiqueta donde se carga el componente
  //template: `<h2>vista</h2>`,  //plantilla asociada al componente
  templateUrl: './salidaVehiculos.component.html',
  providers:[ParqueaderoService]
})

export class SalidaComponent{

  public placaVehiculoSalida:string;
  public factura:factura;
  constructor(
    public _parqueaderoService: ParqueaderoService
  ){}


consultarCostoParqueadero(){
  console.log("placa "+ this.placaVehiculoSalida);
  this._parqueaderoService.calcularCostoParqueadero(this.placaVehiculoSalida).subscribe(
              result => {
                this.factura = result;
                console.log("factgura "+this.factura);
                console.log(result);
                if(!this.factura){
                  console.log("Error");
                }
            },
              error => {
                  console.log(<any>error);
              }
          );
}

}
