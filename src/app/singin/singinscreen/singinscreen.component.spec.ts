import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinginscreenComponent } from './singinscreen.component';

describe('SinginscreenComponent', () => {
  let component: SinginscreenComponent;
  let fixture: ComponentFixture<SinginscreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SinginscreenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SinginscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
