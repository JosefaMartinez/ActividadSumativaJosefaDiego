import { Component } from '@angular/core';

//Decorador
@Component({
  selector: 'app-root', //Nombre de la etiqueta. Se importa en app.module.ts el @component para que se pueda usar de forma global
  templateUrl: './app.component.html', //Es el html para agregar las etiquetas y estructura de la página
  styleUrls: ['./app.component.scss']
})

//
export class AppComponent {
  title = 'ActividadSumativaNotas';
}
