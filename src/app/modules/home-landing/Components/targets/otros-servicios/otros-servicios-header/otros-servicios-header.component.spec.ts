import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtrosServiciosHeaderComponent } from './otros-servicios-header.component';

describe('OtrosServiciosHeaderComponent', () => {
  let component: OtrosServiciosHeaderComponent;
  let fixture: ComponentFixture<OtrosServiciosHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OtrosServiciosHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OtrosServiciosHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
