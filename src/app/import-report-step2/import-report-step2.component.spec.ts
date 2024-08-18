import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportReportStep2Component } from './import-report-step2.component';

describe('ImportReportStep2Component', () => {
  let component: ImportReportStep2Component;
  let fixture: ComponentFixture<ImportReportStep2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImportReportStep2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImportReportStep2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
