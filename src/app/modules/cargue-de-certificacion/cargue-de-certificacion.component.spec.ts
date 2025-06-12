import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargueDeCertificacionComponent } from './cargue-de-certificacion.component';

describe('CargueDeCertificacionComponent', () => {
  let component: CargueDeCertificacionComponent;
  let fixture: ComponentFixture<CargueDeCertificacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CargueDeCertificacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CargueDeCertificacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
