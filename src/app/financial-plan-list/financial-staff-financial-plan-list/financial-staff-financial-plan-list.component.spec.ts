import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialStaffFinancialPlanListComponent } from './financial-staff-financial-plan-list.component';

describe('FinancialStaffFinancialPlanListComponent', () => {
  let component: FinancialStaffFinancialPlanListComponent;
  let fixture: ComponentFixture<FinancialStaffFinancialPlanListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FinancialStaffFinancialPlanListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinancialStaffFinancialPlanListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
