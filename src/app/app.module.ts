import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { FinancialReportComponent } from './financial-report/financial-report.component';
import { TermManagementComponent } from './term-management/term-management.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { LoginComponent } from './components/login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
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
import { FirstStepImportComponent } from './financial-plan-import/first-step-import/first-step-import.component';
import { SecondStepImportComponent } from './financial-plan-import/second-step-import/second-step-import.component';
import { FinancialStaffFinancialPlanSubmitComponent } from './financial-plan-submit/financial-staff-financial-plan-submit/financial-staff-financial-plan-submit.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { ImportReportStep2Component } from './import-report-step2/import-report-step2.component';
import { MonthlyReportDetailsComponent } from './monthly-report-details/monthly-report-details.component';
import { MonthlyReportListComponent } from './monthly-report-list/monthly-report-list.component';
import { ReupReport1Component } from './reup-report1/reup-report1.component';
import { ReupReport2Component } from './reup-report2/reup-report2.component';
import { AnnualReportComponent } from './annual-report/annual-report.component';
import { AnnualReportDetailsComponent } from './annual-report-details/annual-report-details.component';
import { CurrencyFormatPipe } from './pipes/currency-format.pipe';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { AnnualReportService } from './services/annual-report.service';
import { ConfirmDeleteExpenseReportComponent } from './message/confirm-delete-expense-report/confirm-delete-expense-report.component';
import { ConfirmDeletePlanComponent } from './message/confirm-delete-plan/confirm-delete-plan.component';
import { ConfirmEndTermComponent } from './message/confirm-end-term/confirm-end-term.component';
import { ConfirmLogoutComponent } from './message/confirm-logout/confirm-logout.component'
import { ReactiveFormsModule } from '@angular/forms';
import { UploadService } from './services/upload/upload.service';
import { DateFormatPipe } from './pipes/date-format.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatPaginator } from '@angular/material/paginator';
import { MatTabBody } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { ImportReportStep1Component } from './import-report-step1/import-report-step1.component';
import { ConfirmDeleteMonthReportComponent } from './message/confirm-delete-month-report/confirm-delete-month-report.component';
import { ConfirmDeleteUserComponent } from './message/confirm-delete-user/confirm-delete-user.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    FinancialReportComponent,
    TermManagementComponent,
    UserManagementComponent,
    LoginComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    TermDetailsComponent,
    ConfirmStartTermComponent,
    ConfirmDeleteTermComponent,
    EditTermComponent,
    CreateTermComponent,
    AccountantFinancialPlanListComponent,
    FinancialStaffFinancialPlanListComponent,
    AccountantFinancialPlanApproveComponent,
    BothRolesFinancialPlanApproveComponent,
    AccountantFinancialPlanDetailsComponent,
    BothRolesFinancialPlanDetailsComponent,
    FinancialStaffFinancialPlanDetailsComponent,
    PlanHistoryFinancialPlanDetailsComponent,
    AccountantFirstStepEditComponent,
    AccountantSecondStepEditComponent,
    FirstStepEditComponent,
    SecondStepEditComponent,
    FirstStepImportComponent,
    SecondStepImportComponent,
    FinancialStaffFinancialPlanSubmitComponent,
    ImportReportStep1Component,
    ImportReportStep2Component,
    MonthlyReportDetailsComponent,
    MonthlyReportListComponent,
    ReupReport1Component,
    ReupReport2Component,
    AnnualReportComponent,
    AnnualReportDetailsComponent,
    CurrencyFormatPipe,
    UserDetailComponent,
    CreateUserComponent,
    EditUserComponent,
    ConfirmDeleteExpenseReportComponent,
    ConfirmDeletePlanComponent,
    ConfirmEndTermComponent,
    ConfirmLogoutComponent,
    DateFormatPipe,
    ConfirmDeleteMonthReportComponent,
    ConfirmDeleteUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatDialogModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    MatPaginator,
    MatTableModule,

  ],
  providers: [
    provideAnimationsAsync(),
    AuthService, UserService, AnnualReportService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
