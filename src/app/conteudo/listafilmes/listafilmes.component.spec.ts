import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListafilmesComponent } from './listafilmes.component';

describe('ListafilmesComponent', () => {
  let component: ListafilmesComponent;
  let fixture: ComponentFixture<ListafilmesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListafilmesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListafilmesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
