import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardResultTemplatesTableComponent } from './card-result-templates-table.component';

describe('CardResultTemplatesTableComponent', () => {
  let component: CardResultTemplatesTableComponent;
  let fixture: ComponentFixture<CardResultTemplatesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardResultTemplatesTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardResultTemplatesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
