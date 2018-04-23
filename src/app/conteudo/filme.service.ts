import { Injectable } from '@angular/core';
import { Filme } from './filme';
import {HttpClient} from '@angular/common/http'
import { ThrowStmt } from '@angular/compiler';

@Injectable()
export class FilmeService {

  url: string = "http://www.omdbapi.com";
  apikey: string = "86740000";

  constructor(
    private http:HttpClient

  ) { }

  getFilmes(nome: String){

    const url = `${this.url}?apiKey=${this.apikey}&s=${nome}`

    return this.http.get(url);
  }

}
