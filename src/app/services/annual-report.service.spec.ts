import { TestBed } from '@angular/core/testing';

import { AnnualReportService } from './annual-report.service';

describe('AnnualReportService', () => {
  let service: AnnualReportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnnualReportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
