import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Route} from '@angular/router';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

//Importar la interfaz
import {Nota} from '../../interfaces/nota';
//Importar el servicio
import {ServicioInfoService} from '../../servicio-info.service';

import {Observable} from 'rxjs';

@Component({
  selector: 'app-formulario-notas',
  templateUrl: './formulario-notas.component.html',
  styleUrls: ['./formulario-notas.component.scss']
})
export class FormularioNotasComponent implements OnInit {
  formulario:FormGroup;
  constructor(private fb:FormBuilder, private servicio:ServicioInfoService) { 
    //Campos del formulario
    this.formulario=this.fb.group({
      titulo:['',[Validators.required]],
      descripcion:['',[Validators.required,Validators.maxLength(150)]],
      estado:['',Validators.required]
    });
  }

  ngOnInit(): void {
  }

  EnviarDatos(){
    //Se crea un arreglo, en el cual, se agregan los valores obtenidos del formulario
    if(this.formulario.get('titulo')?.value){
      let Lista:Array<Nota>=[{
        titulo:this.formulario.get('titulo')?.value,
        estado:this.formulario.get('estado')?.value,
        descripcion:this.formulario.get('descripcion')?.value
        }
      ]
      window.location.href = ("http://localhost:4200/lista-notas");
      //Se llama al servicio para agregarlo al resto de notas
      this.servicio.GuardarDatos(Lista).subscribe(datos =>{
        console.log(Lista);
      });
  
      
      //Para verificar que se esten recibiendo correctamente los valores del formulario
      /*
      console.log(this.formulario.get('titulo')?.value);
      console.log(this.formulario.get('estado')?.value);
      console.log(this.formulario.get('descripcion')?.value);
      */
    }
    
  }
}
