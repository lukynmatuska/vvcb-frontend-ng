import { TestBed } from '@angular/core/testing';

import { ResultTemplateService } from './result-template.service';

describe('ResultTemplateService', () => {
  let service: ResultTemplateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResultTemplateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
