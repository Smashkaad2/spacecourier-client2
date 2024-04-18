import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarNearlistComponent } from './star-nearlist.component';

describe('StarNearlistComponent', () => {
  let component: StarNearlistComponent;
  let fixture: ComponentFixture<StarNearlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StarNearlistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StarNearlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
