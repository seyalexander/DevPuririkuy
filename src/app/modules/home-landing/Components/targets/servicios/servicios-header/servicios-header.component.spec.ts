import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosHeaderComponent } from './servicios-header.component';

describe('ServiciosHeaderComponent', () => {
  let component: ServiciosHeaderComponent;
  let fixture: ComponentFixture<ServiciosHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiciosHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServiciosHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
