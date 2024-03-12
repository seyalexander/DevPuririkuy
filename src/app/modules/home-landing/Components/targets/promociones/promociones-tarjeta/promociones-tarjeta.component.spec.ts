import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromocionesTarjetaComponent } from './promociones-tarjeta.component';

describe('PromocionesTarjetaComponent', () => {
  let component: PromocionesTarjetaComponent;
  let fixture: ComponentFixture<PromocionesTarjetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PromocionesTarjetaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PromocionesTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
