export interface MonthlyReport {
  monthlyReportId: string; // Kiểu GUID
  fileReportName: string;
  uploadedDate: Date;
  termName: string;
  departmentName: string;
  expenseStatus: number;
  version: number;
}
