import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BothRolesFinancialPlanApproveComponent } from './both-roles-financial-plan-approve.component';

describe('BothRolesFinancialPlanApproveComponent', () => {
  let component: BothRolesFinancialPlanApproveComponent;
  let fixture: ComponentFixture<BothRolesFinancialPlanApproveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BothRolesFinancialPlanApproveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BothRolesFinancialPlanApproveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
