import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

//Importar la interfaz
import {Nota} from './interfaces/nota';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ServicioeliminarService {
  url:String="http://localhost/ActividadSumativaNotas/backend/";
  constructor(private servicio:HttpClient) { }

  //Enviar datos: Los datos de angular hacia php
  EliminarNota(Lista:Array<Nota>):Observable<any>{
    return this.servicio.post(`${this.url}eliminar.php`,JSON.stringify(Lista));
  }
}
