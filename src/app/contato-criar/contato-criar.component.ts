import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { Mask } from '@fagnerlima/ng-mask';

@Component({
  selector: 'app-contato-criar',
  templateUrl: './contato-criar.component.html',
  styleUrls: ['./contato-criar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ContatoCriarComponent implements OnInit {

  contato = {};

  readonly maskDate: string = '00/00/0000';
  readonly maskPhone: string = '(00) 00000-0000';

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  saveContato() {
    this.http.post('/contato', this.contato)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/contatos/']);
        }, (err) => {
          console.log(err);
        }
      );
  }
}