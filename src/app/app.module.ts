import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ContatoComponent } from './contato/contato.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule, Routes } from '@angular/router';
import { ContatoDetalhadoComponent } from './contato-detalhado/contato-detalhado.component';
import { ContatoCriarComponent } from './contato-criar/contato-criar.component';
import { ContatoEditarComponent } from './contato-editar/contato-editar.component';

import { NgMaskModule } from '@fagnerlima/ng-mask';

const appRoutes: Routes = [
  {
    path: 'contatos',
    component: ContatoComponent,
    data: { title: 'Lista de Contatos' }
  },
  {
    path: 'contato-detalhado/:id',
    component: ContatoDetalhadoComponent,
    data: { title: 'Contato Detalhado' }
  },
  {
    path: 'contato-criar',
    component: ContatoCriarComponent,
    data: { title: 'Cadastrar Contato' }
  },
  {
    path: 'contato-editar/:id',
    component: ContatoEditarComponent,
    data: { title: 'Editar Contato' }
  },
  { path: '',
    redirectTo: '/contatos',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ContatoComponent,
    ContatoDetalhadoComponent,
    ContatoCriarComponent,
    ContatoEditarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgMaskModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
