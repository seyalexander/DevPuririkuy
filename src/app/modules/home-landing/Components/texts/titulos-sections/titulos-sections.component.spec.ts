import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitulosSectionsComponent } from './titulos-sections.component';

describe('TitulosSectionsComponent', () => {
  let component: TitulosSectionsComponent;
  let fixture: ComponentFixture<TitulosSectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TitulosSectionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TitulosSectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
