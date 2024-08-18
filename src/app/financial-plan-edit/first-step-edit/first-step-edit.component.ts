import { Component } from '@angular/core';
import { FinancialPlans } from '../../services/financial-plan/plan-model';
import { ActivatedRoute, Router } from '@angular/router';
import { FinancialPlanService } from '../../services/financial-plan/financial-plan.service';

@Component({
  selector: 'app-first-step-edit',
  templateUrl: './first-step-edit.component.html',
  styleUrl: './first-step-edit.component.scss'
})
export class FirstStepEditComponent {
  plan: FinancialPlans = new FinancialPlans();
  planId?: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private financialPlanService: FinancialPlanService
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.planId = id;
        this.loadPlanDetails();
      } else {
        console.error('Plan ID is undefined');
      }
    });
  }

  loadPlanDetails() {
    if (this.planId) {
      this.financialPlanService.viewPlanDetails(this.planId).subscribe(
        (data) => {
          this.plan = data;
        },
        (error) => {
          console.error('Error fetching plan details:', error);
        }
      );
    } else {
      console.error('Plan ID is undefined, cannot load plan details');
    }
  }

  onCancel() {
    this.router.navigate(['/financial-staff-financial-plan-list']);
  }

  onSubmit() {
    if (this.planId) {
      this.financialPlanService.updatePlan(this.planId, this.plan).subscribe(
        (response) => {
          console.log('Plan updated successfully:', response);
          this.router.navigate(['/financial-staff-financial-plan-list']);
        },
        (error) => {
          console.error('Error updating plan:', error);
        }
      );
    } else {
      console.error('Plan ID is undefined, cannot update plan');
    }
  }
}
