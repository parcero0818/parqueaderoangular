import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs';
import {Observable} from 'rxjs';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map, take } from 'rxjs/operators';
import 'rxjs/add/operator/map'



@Injectable()
export class ParqueaderoService{
  public urlIngresoVehiculo:string;
  public urlCarrosParqueados:string;
  public urlSalidaVehiculo:string;

  constructor(private _http:Http){
    this.urlIngresoVehiculo ="";
    this.urlCarrosParqueados="http://localhost:6262/parqueadero/vehiculosParqueados";
    this.urlSalidaVehiculo="";
  }


    vehiculosParqueados(){
      console.log('Entra');
        return this._http.get(this.urlCarrosParqueados).map(response => response.json());
    }

    // nombreServicio() {
    //   return this._http.get(this.urlCarrosParqueados).map((response: any) => response)
    // }
}
