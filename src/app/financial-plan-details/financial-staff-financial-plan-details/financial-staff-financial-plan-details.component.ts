import { Component } from '@angular/core';
import { FinancialPlans } from '../../services/financial-plan/plan-model';
import { Router, ActivatedRoute } from '@angular/router';
import { FinancialPlanService } from '../../services/financial-plan/financial-plan.service';

@Component({
  selector: 'app-financial-staff-financial-plan-details',
  templateUrl: './financial-staff-financial-plan-details.component.html',
  styleUrl: './financial-staff-financial-plan-details.component.scss'
})
export class FinancialStaffFinancialPlanDetailsComponent {
  plan: FinancialPlans | undefined;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private planService: FinancialPlanService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.planService.viewPlanDetails(id).subscribe((data) => {
          this.plan = data;
        });
      }
    });
  }

  onCancel(): void {
    this.router.navigate(['/financial-staff-financial-plan-list']);
  }

  onEdit(): void {
    if (this.plan) {
      this.router.navigate(['/first-step-edit'], { queryParams: { id: this.plan.id } });
    }
  }
}
