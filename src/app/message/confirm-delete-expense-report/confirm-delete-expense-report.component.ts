import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-delete-expense-report',
  templateUrl: './confirm-delete-expense-report.component.html',
  styleUrl: './confirm-delete-expense-report.component.scss'
})
export class ConfirmDeleteExpenseReportComponent {
  constructor(public dialogRef: MatDialogRef<ConfirmDeleteExpenseReportComponent>) {}

  onConfirm(): void {
    this.dialogRef.close(true);
  }

  onCancel(): void {
    this.dialogRef.close(false);
  }
}
