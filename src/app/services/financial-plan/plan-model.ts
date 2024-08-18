export class FinancialPlans {
    id?: string;
    financialPlanName?: string;
    version?: number;
    expense?: string;
    costType?: string;
    unitPrice?: number;
    amount?: number;
    total?: number;
    projectName?: string;
    supplierName?: string;
    pic?: string;
    notes?: string;
    status?: string;
    expenseStatus?: string;
    uploadedDate?: Date;
    uploadedBy?: string;
    termId?: string;
    termName?: string;
  }

  export enum PlanStatus {
    New = 'New',
    WaitingForApproval = 'WaitingForApproval',
    Approved = 'Approved',
    Denied = 'Denied',
  }
  
  export enum ExpenseStatus {
    New = 'New',
    WaitingForApproval = 'WaitingForApproval',
    Approved = 'Approved',
    Closed = 'Closed',
  }