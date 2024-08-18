import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmDeleteMonthReportComponent } from './confirm-delete-month-report.component';

describe('ConfirmDeleteMonthReportComponent', () => {
  let component: ConfirmDeleteMonthReportComponent;
  let fixture: ComponentFixture<ConfirmDeleteMonthReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConfirmDeleteMonthReportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmDeleteMonthReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
