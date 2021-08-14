import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamTableActionBarComponent } from './team-table-action-bar.component';

describe('TeamTableActionBarComponent', () => {
  let component: TeamTableActionBarComponent;
  let fixture: ComponentFixture<TeamTableActionBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamTableActionBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamTableActionBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
