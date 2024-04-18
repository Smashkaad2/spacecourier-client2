import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerElegirComponent } from './player-elegir.component';

describe('PlayerElegirComponent', () => {
  let component: PlayerElegirComponent;
  let fixture: ComponentFixture<PlayerElegirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlayerElegirComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlayerElegirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
