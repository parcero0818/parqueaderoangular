import {Component, ViewChild} from '@angular/core';
import {ParqueaderoService} from '../services/parqueadero.service';
import {Vehic} from './vehic';
import {factura} from './factura';

@Component({
  selector: 'vehiculo',  //etiqueta donde se carga el componente
  //template: `<h2>vista</h2>`,  //plantilla asociada al componente
  templateUrl: './ingreso.component.html',
  providers:[ParqueaderoService],
  styleUrls: ['./ingreso.component.css']
})

export class IngresoComponent{
  public title = 'Ingreso';
  public trabajos:Array<string> = ['obrero', 'ingeniero'];
  public respuesta;
  nuevoVehiculo: Vehic = new Vehic();
  public placaVehiculoSalida:string;
  public factura:factura;
  constructor(
    public _parqueaderoService: ParqueaderoService
  ){}

agregarVehiculo(){
  this._parqueaderoService.addVehiculo(this.nuevoVehiculo).subscribe(
              result => {
                this.respuesta = result._body;
                console.log(result);
                if(!this.respuesta){
                  console.log("Error");
                }
            },
              error => {
                  console.log(<any>error);
              }
          );
}

}
