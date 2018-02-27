import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatoCriarComponent } from './contato-criar.component';

describe('ContatoCriarComponent', () => {
  let component: ContatoCriarComponent;
  let fixture: ComponentFixture<ContatoCriarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContatoCriarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContatoCriarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
