import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultTableActionBarComponent } from './result-table-action-bar.component';

describe('ResultTableActionBarComponent', () => {
  let component: ResultTableActionBarComponent;
  let fixture: ComponentFixture<ResultTableActionBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultTableActionBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultTableActionBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
