import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountantFinancialPlanApproveComponent } from './accountant-financial-plan-approve.component';

describe('AccountantFinancialPlanApproveComponent', () => {
  let component: AccountantFinancialPlanApproveComponent;
  let fixture: ComponentFixture<AccountantFinancialPlanApproveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccountantFinancialPlanApproveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountantFinancialPlanApproveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
