import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contato-detalhado',
  templateUrl: './contato-detalhado.component.html',
  styleUrls: ['./contato-detalhado.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ContatoDetalhadoComponent implements OnInit {

  contato = {};

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.getContatoDetalhado(this.route.snapshot.params['id']);
  }

  getContatoDetalhado(id) {
    this.http.get('/contato/'+id).subscribe(dados => {
      this.contato = dados;
    });
  }

  deleteContato(id) {
    this.http.delete('/contato/'+id)
      .subscribe(res => {
          this.router.navigate(['/contatos']);
        }, (err) => {
          console.log(err);
        }
      );
  }

}