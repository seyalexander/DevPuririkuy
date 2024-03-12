import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NosotrosTarjetasComponent } from './nosotros-tarjetas.component';

describe('NosotrosTarjetasComponent', () => {
  let component: NosotrosTarjetasComponent;
  let fixture: ComponentFixture<NosotrosTarjetasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NosotrosTarjetasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NosotrosTarjetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
