import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FinancialReportComponent } from './financial-report/financial-report.component';
import { TermManagementComponent } from './term-management/term-management.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { LoginComponent } from './components/login/login.component';
import { TermDetailsComponent } from './term-details/term-details.component';
import { ConfirmStartTermComponent } from './message/confirm-start-term/confirm-start-term.component';
import { ConfirmDeleteTermComponent } from './message/confirm-delete-term/confirm-delete-term.component';
import { EditTermComponent } from './edit-term/edit-term.component';
import { CreateTermComponent } from './create-term/create-term.component';
import { AccountantFinancialPlanListComponent } from './financial-plan-list/accountant-financial-plan-list/accountant-financial-plan-list.component';
import { FinancialStaffFinancialPlanListComponent } from './financial-plan-list/financial-staff-financial-plan-list/financial-staff-financial-plan-list.component';
import { AccountantFinancialPlanApproveComponent } from './financial-plan-approve/accountant-financial-plan-approve/accountant-financial-plan-approve.component';
import { BothRolesFinancialPlanApproveComponent } from './financial-plan-approve/both-roles-financial-plan-approve/both-roles-financial-plan-approve.component';
import { AccountantFinancialPlanDetailsComponent } from './financial-plan-details/accountant-financial-plan-details/accountant-financial-plan-details.component';
import { BothRolesFinancialPlanDetailsComponent } from './financial-plan-details/both-roles-financial-plan-details/both-roles-financial-plan-details.component';
import { FinancialStaffFinancialPlanDetailsComponent } from './financial-plan-details/financial-staff-financial-plan-details/financial-staff-financial-plan-details.component';
import { PlanHistoryFinancialPlanDetailsComponent } from './financial-plan-details/plan-history-financial-plan-details/plan-history-financial-plan-details.component';
import { AccountantFirstStepEditComponent } from './financial-plan-edit/accountant-first-step-edit/accountant-first-step-edit.component';
import { AccountantSecondStepEditComponent } from './financial-plan-edit/accountant-second-step-edit/accountant-second-step-edit.component';
import { FirstStepEditComponent } from './financial-plan-edit/first-step-edit/first-step-edit.component';
import { SecondStepEditComponent } from './financial-plan-edit/second-step-edit/second-step-edit.component';
import { FirstStepImportComponent} from './financial-plan-import/first-step-import/first-step-import.component';
import { SecondStepImportComponent } from './financial-plan-import/second-step-import/second-step-import.component';
import {FinancialStaffFinancialPlanSubmitComponent} from './financial-plan-submit/financial-staff-financial-plan-submit/financial-staff-financial-plan-submit.component';
import {ImportReportStep1Component} from './import-report-step1/import-report-step1.component';
import {ImportReportStep2Component} from './import-report-step2/import-report-step2.component';
import {MonthlyReportListComponent} from './monthly-report-list/monthly-report-list.component';
import {MonthlyReportDetailsComponent} from './monthly-report-details/monthly-report-details.component';
import {ReupReport1Component} from './reup-report1/reup-report1.component';
import {ReupReport2Component} from './reup-report2/reup-report2.component';
import {AnnualReportComponent} from './annual-report/annual-report.component';
import {AnnualReportDetailsComponent} from './annual-report-details/annual-report-details.component';
import {UserDetailComponent} from './user-detail/user-detail.component';
import {CreateUserComponent} from './create-user/create-user.component';
import {EditUserComponent} from './edit-user/edit-user.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'financial-report', component: FinancialReportComponent },
  { path: 'term-management', component: TermManagementComponent },
  { path: 'user-management', component: UserManagementComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: 'term-details', component: TermDetailsComponent },
  { path: 'confirm-start-term', component: ConfirmStartTermComponent },
  { path: 'confirm-delete-term', component: ConfirmDeleteTermComponent },
  { path: 'edit-term', component: EditTermComponent },
  { path: 'create-term', component: CreateTermComponent },
  { path: 'accountant-financial-plan-list', component: AccountantFinancialPlanListComponent },
  { path: 'financial-staff-financial-plan-list', component: FinancialStaffFinancialPlanListComponent },
  { path: 'accountant-financial-plan-approve', component: AccountantFinancialPlanApproveComponent },
  { path: 'both-roles-financial-plan-approve', component: BothRolesFinancialPlanApproveComponent },
  { path: 'accountant-financial-plan-details', component: AccountantFinancialPlanDetailsComponent },
  { path: 'both-roles-financial-plan-details', component: BothRolesFinancialPlanDetailsComponent },
  { path: 'financial-staff-financial-plan-details', component: FinancialStaffFinancialPlanDetailsComponent },
  { path: 'plan-history-financial-plan-details', component: PlanHistoryFinancialPlanDetailsComponent },
  { path: 'accountant-first-step-edit', component: AccountantFirstStepEditComponent },
  { path: 'accountant-second-step-edit', component: AccountantSecondStepEditComponent },
  { path: 'first-step-edit', component: FirstStepEditComponent },
  { path: 'second-step-edit', component: SecondStepEditComponent },
  { path: 'first-step-import', component: FirstStepImportComponent },
  { path: 'second-step-import', component: SecondStepImportComponent },
  { path: 'financial-staff-financial-plan-submit', component: FinancialStaffFinancialPlanSubmitComponent },
  { path: 'import-report-step1', component: ImportReportStep1Component },
  { path: 'import-report-step2', component: ImportReportStep2Component },
  { path: 'monthly-report-list', component: MonthlyReportListComponent },
  { path: 'monthly-report-details/:termId/:departmentId', component: MonthlyReportDetailsComponent },

  { path: 'reup-report1', component: ReupReport1Component },
  { path: 'reup-report2', component: ReupReport2Component },
  { path: 'annual-report', component: AnnualReportComponent },
  { path: 'annual-report-details/:year', component: AnnualReportDetailsComponent },
  { path: 'user-detail/:id', component: UserDetailComponent },
  { path: 'create-user', component: CreateUserComponent },
  { path: 'edit-user/:id', component: EditUserComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
