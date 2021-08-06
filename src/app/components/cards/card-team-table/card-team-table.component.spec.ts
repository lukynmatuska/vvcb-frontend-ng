import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTeamTableComponent } from './card-team-table.component';

describe('CardTeamTableComponent', () => {
  let component: CardTeamTableComponent;
  let fixture: ComponentFixture<CardTeamTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardTeamTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardTeamTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
