import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { Mask } from '@fagnerlima/ng-mask';

@Component({
  selector: 'app-contato-editar',
  templateUrl: './contato-editar.component.html',
  styleUrls: ['./contato-editar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ContatoEditarComponent implements OnInit {

  contato:  any = {};

  readonly maskDate: string = '00/00/0000';
  readonly maskPhone: string = '(00) 00000-0000';

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getContato(this.route.snapshot.params['id']);
  }

  getContato(id) {
    this.http.get('/contato/'+id).subscribe(dados => {
      this.contato = dados;
    });
  }

  updateContato(id, contato) {
    this.http.put('/contato/'+id, this.contato)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/contatos/']);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
