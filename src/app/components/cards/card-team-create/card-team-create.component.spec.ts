import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTeamCreateComponent } from './card-team-create.component';

describe('CardTeamCreateComponent', () => {
  let component: CardTeamCreateComponent;
  let fixture: ComponentFixture<CardTeamCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardTeamCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardTeamCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
