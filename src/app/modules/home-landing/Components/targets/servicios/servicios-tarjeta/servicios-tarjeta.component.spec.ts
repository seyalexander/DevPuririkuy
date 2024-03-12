import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosTarjetaComponent } from './servicios-tarjeta.component';

describe('ServiciosTarjetaComponent', () => {
  let component: ServiciosTarjetaComponent;
  let fixture: ComponentFixture<ServiciosTarjetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiciosTarjetaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServiciosTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
