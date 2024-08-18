import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialStaffFinancialPlanDetailsComponent } from './financial-staff-financial-plan-details.component';

describe('FinancialStaffFinancialPlanDetailsComponent', () => {
  let component: FinancialStaffFinancialPlanDetailsComponent;
  let fixture: ComponentFixture<FinancialStaffFinancialPlanDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FinancialStaffFinancialPlanDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinancialStaffFinancialPlanDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
