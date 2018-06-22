import {Component, ViewChild} from '@angular/core';
import {ParqueaderoService} from '../services/parqueadero.service';
import {Vehic} from './vehic';

@Component({
  selector: 'vehiculo',  //etiqueta donde se carga el componente
  //template: `<h2>vista</h2>`,  //plantilla asociada al componente
  templateUrl: './ingreso.component.html',
  providers:[ParqueaderoService]
})

export class IngresoComponent{
  public title = 'Ingreso';
  public trabajos:Array<string> = ['obrero', 'ingeniero'];
  public vehiculos;
  nuevoVehiculo: Vehic = new Vehic();
  public placaVehiculoSalida:string;
  public factura:factura;
  constructor(
    public _parqueaderoService: ParqueaderoService
  ){}

ngOnInit(){
  this._parqueaderoService.listaVehiculosParqueados().subscribe(
              result => {
                this.vehiculos = result;
                console.log(result);
                if(!this.vehiculos){
                  console.log("Error");
                }
            },
              error => {
                  console.log(<any>error);
              }
          );
}

agregarVehiculo(){
  this._parqueaderoService.addVehiculo(this.nuevoVehiculo).subscribe(
              result => {
                this.vehiculos = result;
                console.log(result);
                if(!this.vehiculos){
                  console.log("Error");
                }
            },
              error => {
                  console.log(<any>error);
              }
          );
}

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
