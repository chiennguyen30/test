import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BothRolesFinancialPlanDetailsComponent } from './both-roles-financial-plan-details.component';

describe('BothRolesFinancialPlanDetailsComponent', () => {
  let component: BothRolesFinancialPlanDetailsComponent;
  let fixture: ComponentFixture<BothRolesFinancialPlanDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BothRolesFinancialPlanDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BothRolesFinancialPlanDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
