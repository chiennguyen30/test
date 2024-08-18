import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountantFinancialPlanListComponent } from './accountant-financial-plan-list.component';

describe('AccountantFinancialPlanListComponent', () => {
  let component: AccountantFinancialPlanListComponent;
  let fixture: ComponentFixture<AccountantFinancialPlanListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccountantFinancialPlanListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountantFinancialPlanListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
