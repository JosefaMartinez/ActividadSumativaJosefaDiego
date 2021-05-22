import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

//Importar la interfaz
import {Nota} from './interfaces/nota';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioInfoService {
  url:String="http://localhost/ActividadSumativaNotas/backend/";
  constructor(private servicio:HttpClient) { }

  //Enviar datos: Los datos de angular hacia php
  GuardarDatos(Lista:Array<Nota>):Observable<any>{
    //console.log(Lista);
    
    return this.servicio.post(`${this.url}agregar.php`,JSON.stringify(Lista));
  }
}
