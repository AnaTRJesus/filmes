import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FilmeService } from '../../filme.service';
import { Filme } from '../../filme';

@Component({
  selector: 'app-form-pesquisa',
  templateUrl: './form-pesquisa.component.html',
  styleUrls: ['./form-pesquisa.component.css']
})
export class FormPesquisaComponent implements OnInit {

  @Output()
  public pesquisa = new EventEmitter<object[]>()

  listaFilmes: Filme[] = [];


  constructor(private filmeService: FilmeService) { }

  ngOnInit() {

  }

  onSubmit(Form){

    this.listaFilmes = [];
      
    this.filmeService.getFilmes(Form.value.nome).subscribe(data => { data['Search'].map(filme => {
      let film = {

        'id':filme.imdbID,
        'titulo':filme.Title,
        'ano':filme.Year,
        'tipo':filme.Type,
        'poster':filme.Poster

      }
 
      this.listaFilmes.push(film);

  });

      this.pesquisa.emit(this.listaFilmes)

});

 }

}



