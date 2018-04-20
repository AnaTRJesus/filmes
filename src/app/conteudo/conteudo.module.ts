import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListafilmesComponent } from './listafilmes/listafilmes.component';
import { FilmeCardComponent } from './filme-card/filme-card.component';
import { FilmeService } from './filme.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [ListafilmesComponent, FilmeCardComponent],
  exports:[
    ListafilmesComponent,
    FilmeCardComponent
  ],
  providers: [FilmeService]
})
export class ConteudoModule { }
