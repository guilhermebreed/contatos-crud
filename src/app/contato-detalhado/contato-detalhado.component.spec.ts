import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatoDetalhadoComponent } from './contato-detalhado.component';

describe('ContatoDetalhadoComponent', () => {
  let component: ContatoDetalhadoComponent;
  let fixture: ComponentFixture<ContatoDetalhadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContatoDetalhadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContatoDetalhadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
