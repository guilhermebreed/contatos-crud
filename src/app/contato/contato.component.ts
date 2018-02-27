import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  contatos: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('/contato').subscribe(dados => {
      this.contatos = dados;
    });
  }
}
