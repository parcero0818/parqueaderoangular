import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs';
import {Observable} from 'rxjs';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map, take } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import {Vehic} from '../ingresoVehiculos/vehic';



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


    listaVehiculosParqueados(){
        return this._http.get(this.urlCarrosParqueados).map(response => response.json());
    }

    addVehiculo (vehic: Vehic) {
    /*let json = JSON.stringify(vehic);
    let params = "json="+json;
    let headers = new HttpHeaders().set('Content-Type','application/json');
    //return this.http.post(this.url+'productos', params, {headers: headers});
    console.log('servicio '+vehic);
    return this._http.post<Vehic>(this.urlIngresoVehiculo, vehic, { headers: headers }).pipe(
      tap((vehic: Vehic) => this.log(`added hero w/ id=${vehic.id}`)),
      catchError(this.handleError<Vehic>('addProducto'))
    );
*/

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this.urlIngresoVehiculo, vehic, options)
                       .map(response =>response);


  }

    // nombreServicio() {
    //   return this._http.get(this.urlCarrosParqueados).map((response: any) => response)
    // }
}
