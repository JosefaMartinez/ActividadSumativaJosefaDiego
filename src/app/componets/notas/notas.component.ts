import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms'; //para el formulario reactivo
import {ActivatedRoute} from '@angular/router';

import {Nota} from '../../interfaces/nota';


@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.scss']
})
export class NotasComponent implements OnInit {
  formulario:FormGroup;
  ListaNotas:Array<Nota>=[];

  constructor(private ruta:ActivatedRoute, private fb:FormBuilder) { 
    this.ruta.params.subscribe(parametros=>{
      console.log(parametros["titulo"]);
      //Para que muestre lo que encuentra 
      //console.log(this.Buscar(parametros["titulo"]))
    })
    this.formulario=this.fb.group({
      titulo:['',[Validators.required]],
      estado:['',[Validators.required]],
      descripcion:['',[Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  Buscar<Nota>(titulo:string){
    //Buscar el que sea igual
    return this.ListaNotas.find(element=>element.titulo==titulo)
  }
}
