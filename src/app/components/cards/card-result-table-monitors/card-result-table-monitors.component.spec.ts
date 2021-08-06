import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardResultTableMonitorsComponent } from './card-result-table-monitors.component';

describe('CardResultTableMonitorsComponent', () => {
  let component: CardResultTableMonitorsComponent;
  let fixture: ComponentFixture<CardResultTableMonitorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardResultTableMonitorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardResultTableMonitorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
