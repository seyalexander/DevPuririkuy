import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtrosServiciosTarjetaComponent } from './otros-servicios-tarjeta.component';

describe('OtrosServiciosTarjetaComponent', () => {
  let component: OtrosServiciosTarjetaComponent;
  let fixture: ComponentFixture<OtrosServiciosTarjetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OtrosServiciosTarjetaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OtrosServiciosTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
