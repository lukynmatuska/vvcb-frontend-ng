import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultActionBarComponent } from './result-action-bar.component';

describe('ResultActionBarComponent', () => {
  let component: ResultActionBarComponent;
  let fixture: ComponentFixture<ResultActionBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultActionBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultActionBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
