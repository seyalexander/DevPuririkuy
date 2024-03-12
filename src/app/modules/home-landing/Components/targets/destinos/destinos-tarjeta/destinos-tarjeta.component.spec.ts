import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinosTarjetaComponent } from './destinos-tarjeta.component';

describe('DestinosTarjetaComponent', () => {
  let component: DestinosTarjetaComponent;
  let fixture: ComponentFixture<DestinosTarjetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DestinosTarjetaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DestinosTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
