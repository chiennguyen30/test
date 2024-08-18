import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportReportStep1Component } from './import-report-step1.component';

describe('ImportReportStep1Component', () => {
  let component: ImportReportStep1Component;
  let fixture: ComponentFixture<ImportReportStep1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImportReportStep1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImportReportStep1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
