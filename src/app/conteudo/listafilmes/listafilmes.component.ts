import { Component, OnInit } from '@angular/core';
import { Filme } from '../filme';
import { FilmeService } from '../filme.service';

@Component({
  selector: 'app-listafilmes',
  templateUrl: './listafilmes.component.html',
  styleUrls: ['./listafilmes.component.css']
})
export class ListafilmesComponent implements OnInit {

  listaFilmes: Filme[] = [];

  constructor(  ) { }

  ngOnInit() {

      }

  carregaLista(lista: Filme[]){
    this.listaFilmes = lista;
  }    
 
  apagaFilme(filme: Filme): void{
    this.listaFilmes = this.listaFilmes.filter(item => item.id!= filme.id);
  }
}
