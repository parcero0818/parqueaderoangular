import {Component} from '@angular/core';
import {ParqueaderoService} from '../services/parqueadero.service';

@Component({
  selector: 'vehiculo',  //etiqueta donde se carga el componente
  //template: `<h2>vista</h2>`,  //plantilla asociada al componente
  templateUrl: './ingreso.component.html',
  providers:[ParqueaderoService]
})

export class IngresoComponent{
  public title = 'Ingreso';
  public trabajos:Array<string> = ['obrero', 'ingeniero'];
  public productos:Array<any>;
  constructor(
    public _parqueaderoService: ParqueaderoService
  ){}

ngOnInit(){
  console.log("Entra");
  this._parqueaderoService.vehiculosParqueados().subscribe(
              result => {

                  if(result.code != 200){
                      console.log(result);
                  }else{
                      this.productos = result.data;
                      console.log(result.data);
                  }

              },
              error => {
                  console.log(<any>error);
              }
          );
}

}
