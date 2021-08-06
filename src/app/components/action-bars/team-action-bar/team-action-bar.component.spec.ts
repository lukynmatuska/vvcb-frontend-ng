import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamActionBarComponent } from './team-action-bar.component';

describe('TeamActionBarComponent', () => {
  let component: TeamActionBarComponent;
  let fixture: ComponentFixture<TeamActionBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamActionBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamActionBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
