import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetViewComponent } from './planet-view.component';

describe('PlanetViewComponent', () => {
  let component: PlanetViewComponent;
  let fixture: ComponentFixture<PlanetViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlanetViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlanetViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
