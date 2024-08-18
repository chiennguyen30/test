import { TestBed } from '@angular/core/testing';

import { FinancialPlanService } from './financial-plan.service';

describe('FinancialPlanService', () => {
  let service: FinancialPlanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FinancialPlanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
