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
  //public factura:factura;
  public resultado:string;
  constructor(
    public _parqueaderoService: ParqueaderoService
  ){}


consultarCostoParqueadero(){
  console.log("placa "+ this.placaVehiculoSalida);
  this._parqueaderoService.calcularCostoParqueadero(this.placaVehiculoSalida).subscribe(
              result => {
                this.resultado = result._body;
                console.log("factgura "+this.resultado);
                console.log(result);
                if(!this.resultado){
                  console.log("Error");
                }
            },
              error => {
                  console.log(<any>error);
              }
          );
}

}
