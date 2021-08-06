import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardResultCreateComponent } from './card-result-create.component';

describe('CardResultCreateComponent', () => {
  let component: CardResultCreateComponent;
  let fixture: ComponentFixture<CardResultCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardResultCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardResultCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
