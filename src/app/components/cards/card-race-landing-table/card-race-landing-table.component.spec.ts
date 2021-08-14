import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardRaceLandingTableComponent } from './card-race-landing-table.component';

describe('CardRaceLandingTableComponent', () => {
  let component: CardRaceLandingTableComponent;
  let fixture: ComponentFixture<CardRaceLandingTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardRaceLandingTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardRaceLandingTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
