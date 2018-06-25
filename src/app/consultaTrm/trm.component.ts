import {Component, ViewChild} from '@angular/core';
import {ParqueaderoService} from '../services/parqueadero.service';

@Component({
  selector: 'trm',  //etiqueta donde se carga el componente
  //template: `<h2>vista</h2>`,  //plantilla asociada al componente
  templateUrl: './trm.component.html',
  providers:[ParqueaderoService]
})

export class TrmComponent{
  public respuesta;
  constructor(
    public _parqueaderoService: ParqueaderoService
  ){}

obtenerTrm(){
  // this._parqueaderoService.addVehiculo(this.nuevoVehiculo).subscribe(
  //             result => {
  //               this.respuesta = result._body;
  //               console.log(result._body);
  //               if(!this.respuesta){
  //                 console.log("Error");
  //               }
  //           },
  //             error => {
  //                 console.log(<any>error);
  //             }
  //         );
}

}
