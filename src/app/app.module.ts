import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MisNotasComponent } from './componets/mis-notas/mis-notas.component';
//Modulo de bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//Modulo de Material Design
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { NotasComponent } from './componets/notas/notas.component';
import { ListaNotasComponent } from './componets/lista-notas/lista-notas.component'; //button

//Carta basica
import {MatCardModule} from '@angular/material/card';

//Para el rellenado de formulario
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';

//Para el formulario reactivo
import {ReactiveFormsModule} from '@angular/forms';
import { HeaderComponent } from './componets/header/header.component';
import { FooterComponent } from './componets/footer/footer.component';
import { FormularioNotasComponent } from './componets/formulario-notas/formulario-notas.component';
import { AbiertoComponent } from './componets/abierto/abierto.component';
import { ProcesoComponent } from './componets/proceso/proceso.component';
import { CerradoComponent } from './componets/cerrado/cerrado.component';

//http
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MisNotasComponent,
    NotasComponent,
    ListaNotasComponent,
    HeaderComponent,
    FooterComponent,
    FormularioNotasComponent,
    AbiertoComponent,
    ProcesoComponent,
    CerradoComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatCardModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
