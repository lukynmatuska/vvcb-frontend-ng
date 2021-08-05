import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsTableMonitorsComponent } from './results-table-monitors.component';

describe('ResultsTableMonitorsComponent', () => {
  let component: ResultsTableMonitorsComponent;
  let fixture: ComponentFixture<ResultsTableMonitorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultsTableMonitorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsTableMonitorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
