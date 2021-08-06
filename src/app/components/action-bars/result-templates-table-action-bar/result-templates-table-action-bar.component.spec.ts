import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultTemplatesTableActionBarComponent } from './result-templates-table-action-bar.component';

describe('ResultTemplatesTableActionBarComponent', () => {
  let component: ResultTemplatesTableActionBarComponent;
  let fixture: ComponentFixture<ResultTemplatesTableActionBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultTemplatesTableActionBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultTemplatesTableActionBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
