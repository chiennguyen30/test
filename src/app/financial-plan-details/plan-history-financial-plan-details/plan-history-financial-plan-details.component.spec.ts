import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanHistoryFinancialPlanDetailsComponent } from './plan-history-financial-plan-details.component';

describe('PlanHistoryFinancialPlanDetailsComponent', () => {
  let component: PlanHistoryFinancialPlanDetailsComponent;
  let fixture: ComponentFixture<PlanHistoryFinancialPlanDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlanHistoryFinancialPlanDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanHistoryFinancialPlanDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
