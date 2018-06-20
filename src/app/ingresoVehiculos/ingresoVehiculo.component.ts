import {Component} from '@angular/core';
import {ParqueaderoService} from '../services/parqueadero.service';

@Component({
  selector: 'ingreso',  //etiqueta donde se carga el componente
  //template: `<h2>vista</h2>`  //plantilla asociada al componente
  templateUrl: './ingreso.component.html',
})

export class IngresoComponent{
  title = 'Ingreso';
  public trabajos:Array<string> = ['obrero', 'ingeniero'];



}
