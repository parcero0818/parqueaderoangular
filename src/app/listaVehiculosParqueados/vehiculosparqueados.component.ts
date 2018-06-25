import {Component} from '@angular/core';
import {ParqueaderoService} from '../services/parqueadero.service';

@Component({
  selector: 'vehiculosEnParqueadero',  //etiqueta donde se carga el componente
  //template: `<h2>vista</h2>`,  //plantilla asociada al componente
  templateUrl: './vehiculosparqueados.component.html',
  providers:[ParqueaderoService]
})

export class ListaVehiculosParqueados{
  public title = 'Ingreso';
  public trabajos:Array<string> = ['obrero', 'ingeniero'];
  public vehiculos;
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

}
