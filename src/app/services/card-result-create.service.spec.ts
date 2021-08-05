import { TestBed } from '@angular/core/testing';

import { CardResultCreateService } from './card-result-create.service';

describe('CardResultCreateService', () => {
  let service: CardResultCreateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardResultCreateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
