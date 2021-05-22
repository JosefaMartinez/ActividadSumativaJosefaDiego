import { Component, OnInit } from '@angular/core';
import {Nota} from '../../interfaces/nota';
import {ServicioNotasService} from '../../servicio-notas.service';

@Component({
  selector: 'app-cerrado',
  templateUrl: './cerrado.component.html',
  styleUrls: ['./cerrado.component.scss']
})
export class CerradoComponent implements OnInit {

  ListaNotas:Array<Nota>=[];
  constructor(private servicio:ServicioNotasService) { }

  ngOnInit(): void {
    this.servicio.ConsultarNotas().subscribe(datos=>{
      //Buscar los elementos de la lista que esten en abierto
      for(let i=0;i<datos.length;i++){
        if(datos[i].estado=="cerrado"){
          this.ListaNotas.push(datos[i]);
        }
      }
    });
  }

  remove(nota:Nota){
    window.location.href = ("http://localhost:4200/lista-notas");
  }
}
