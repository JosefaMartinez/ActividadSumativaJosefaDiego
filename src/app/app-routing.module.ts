import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Importar componentes que ya cree
import {NotasComponent} from '../app/componets/notas/notas.component';
import {ListaNotasComponent} from '../app/componets/lista-notas/lista-notas.component';
import { FormularioNotasComponent } from './componets/formulario-notas/formulario-notas.component';


const routes: Routes = [
  {path:'',component:FormularioNotasComponent},
  {path:'notas',component:NotasComponent},
  {path:'notas/:titulo',component:NotasComponent},
  {path:'lista-notas',component:ListaNotasComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
