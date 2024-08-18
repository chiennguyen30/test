import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountantFinancialPlanDetailsComponent } from './accountant-financial-plan-details.component';

describe('AccountantFinancialPlanDetailsComponent', () => {
  let component: AccountantFinancialPlanDetailsComponent;
  let fixture: ComponentFixture<AccountantFinancialPlanDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccountantFinancialPlanDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountantFinancialPlanDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
