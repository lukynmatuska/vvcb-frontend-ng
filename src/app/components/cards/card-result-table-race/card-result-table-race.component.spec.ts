import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardResultTableRaceComponent } from './card-result-table-race.component';

describe('CardResultTableRaceComponent', () => {
  let component: CardResultTableRaceComponent;
  let fixture: ComponentFixture<CardResultTableRaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardResultTableRaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardResultTableRaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
