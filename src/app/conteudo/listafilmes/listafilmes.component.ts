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

  constructor(
    private filmeService: FilmeService
  ) { }

  ngOnInit() {
    this.filmeService.getFilmes().subscribe(data => { data['Search'].map(filme => {
      let film = {

        'id':filme.imdbID,
        'titulo':filme.Title,
        'ano':filme.Year,
        'tipo':filme.Type,
        'poster':filme.Poster
      }

      this.listaFilmes.push(film);


    });
  });

  }

  apagaFilme(filme: Filme): void{
    this.listaFilmes = this.listaFilmes.filter(item => item.id!= filme.id);
  }
}
