//import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import {Nota} from '../../interfaces/nota';
import {ServicioNotasService} from '../../servicio-notas.service';
import {ServicioeliminarService} from '../../servicioeliminar.service';

@Component({
  selector: 'app-abierto',
  templateUrl: './abierto.component.html',
  styleUrls: ['./abierto.component.scss']
})
export class AbiertoComponent implements OnInit {
  ListaNotas:Array<Nota>=[];
  ArrayConNotaEliminar:Array<Nota>=[];
  
  constructor(private servicio:ServicioNotasService, private servicioEliminar: ServicioeliminarService) { }
  /*
  eliminarNota(id:String){
    //this.servicioEliminar.EliminarNota().subscribe(datos=>{
      console.log("hola");
      console.log(datos);
      for(let i = 0; i < datos.length; i++){
        if(datos[i].titulo == id){
          this.ArrayConNotaEliminar[0] = datos[i];
        }
      }
    });
  }

  remove(nota:Nota){
    this.ArrayConNotaEliminar[0] = nota; 
    //console.log(nota);
    //this.servicioEliminar.EliminarNota(this.ArrayConNotaEliminar);
  }*/

  
  ngOnInit(): void {
    this.servicio.ConsultarNotas().subscribe(datos=>{
      //Buscar los elementos de la lista que esten en abierto
      for(let i=0;i<datos.length;i++){
        if(datos[i].estado=="abierto"){
          this.ListaNotas.push(datos[i]);
        }
      }
    });
  }

  remove(nota:Nota){
    window.location.href = ("http://localhost:4200/lista-notas");
    
  }
}
