import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardResultTableComponent } from './card-result-table.component';

describe('CardResultTableComponent', () => {
  let component: CardResultTableComponent;
  let fixture: ComponentFixture<CardResultTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardResultTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardResultTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
