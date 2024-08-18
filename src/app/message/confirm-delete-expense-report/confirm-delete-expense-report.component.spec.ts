import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmDeleteExpenseReportComponent } from './confirm-delete-expense-report.component';

describe('ConfirmDeleteExpenseReportComponent', () => {
  let component: ConfirmDeleteExpenseReportComponent;
  let fixture: ComponentFixture<ConfirmDeleteExpenseReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConfirmDeleteExpenseReportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmDeleteExpenseReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
