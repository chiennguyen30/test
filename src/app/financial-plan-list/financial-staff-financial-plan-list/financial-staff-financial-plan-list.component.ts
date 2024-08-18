import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ConfirmDeleteTermComponent } from '../../message/confirm-delete-term/confirm-delete-term.component';
import { FinancialPlans, PlanStatus } from '../../services/financial-plan/plan-model';
import { FinancialPlanService } from '../../services/financial-plan/financial-plan.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConfirmDeletePlanComponent } from '../../message/confirm-delete-plan/confirm-delete-plan.component';

@Component({
  selector: 'app-financial-staff-financial-plan-list',
  templateUrl: './financial-staff-financial-plan-list.component.html',
  styleUrl: './financial-staff-financial-plan-list.component.scss'
})
export class FinancialStaffFinancialPlanListComponent {
  p: number = 1;
  plans: FinancialPlans[] = [];
  searchName: string = '';
  selectedStatus: PlanStatus | '' = '';
  planStatuses: PlanStatus[] = [PlanStatus.New, PlanStatus.Approved, PlanStatus.WaitingForApproval, PlanStatus.Denied];
  constructor(
    private router: Router,
    private planService: FinancialPlanService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  openConfirmationDialog(): void {
    const dialogRef = this.dialog.open(ConfirmDeletePlanComponent);

  }

  ngOnInit(): void {
    this.loadPlans();
  }

  loadPlans(): void {
    this.planService.getPlans().subscribe((data) => {
      this.plans = data;
    });
  }

  planDetails(plan: FinancialPlans): void {
    this.router.navigate(['/financial-staff-financial-plan-details'], { queryParams: { id: plan.id } });
  }

  editPlan(plan: FinancialPlans): void {
    this.router.navigate(['/first-step-edit'], { queryParams: { id: plan.id } });
  }

 deletePlan(plan: FinancialPlans): void {
  const dialogRef = this.dialog.open(ConfirmDeletePlanComponent);

  dialogRef.afterClosed().subscribe(result => {
    if (result) {
      const planId = plan.id?.toString(); // Convert id to string if it's defined

      if (planId) {
        this.planService.deletePlan(planId).subscribe({
          next: () => {
            this.plans = this.plans.filter(p => p.id !== plan.id);
            this.snackBar.open('Financial plan has been successfully deleted!', 'Close', {
              duration: 3000, // Duration in milliseconds
              horizontalPosition: 'right',
              verticalPosition: 'top',
            });
            console.log('Deleted:', plan);
          },
        });
      } 
    }
  });
}

searchPlansByName(): void {
  if (this.searchName.trim()) {
    this.planService.searchPlanByName(this.searchName).subscribe({
      next: (data) => {
        this.plans = data;
      },
      error: (err) => {
        this.snackBar.open('No items match your credentials, please try again.', 'Close', {
          duration: 3000,
          horizontalPosition: 'right',
          verticalPosition: 'top',
        });
      }
    });
  } else {
    this.loadPlans(); // If the search input is empty, load all terms
  }
}

  filterPlansByStatus(): void {
    if (this.selectedStatus) {
      this.planService.getPlansByStatus(this.selectedStatus).subscribe((data) => {
        this.plans = data;
      });
    } else {
      this.loadPlans(); 
    }
  }
}
