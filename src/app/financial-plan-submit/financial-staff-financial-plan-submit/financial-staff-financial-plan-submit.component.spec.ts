import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialStaffFinancialPlanSubmitComponent } from './financial-staff-financial-plan-submit.component';

describe('FinancialStaffFinancialPlanSubmitComponent', () => {
  let component: FinancialStaffFinancialPlanSubmitComponent;
  let fixture: ComponentFixture<FinancialStaffFinancialPlanSubmitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FinancialStaffFinancialPlanSubmitComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinancialStaffFinancialPlanSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
