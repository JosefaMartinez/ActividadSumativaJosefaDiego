import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

//Observables para ver si hay peticiones http
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioNotasService {
  url="http://localhost/ActividadSumativaNotas/backend/";
  constructor(private http:HttpClient) { }

  ConsultarNotas():Observable<any>{
    return this.http.get(`${this.url}cargar.php`);
  }

  
}
