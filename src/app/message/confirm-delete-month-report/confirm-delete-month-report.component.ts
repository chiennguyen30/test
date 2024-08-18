import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-delete-month-report',
  templateUrl: './confirm-delete-month-report.component.html',
  styleUrl: './confirm-delete-month-report.component.scss'
})
export class ConfirmDeleteMonthReportComponent {
  constructor(public dialogRef: MatDialogRef<ConfirmDeleteMonthReportComponent>) {}

  onConfirm(): void {
    this.dialogRef.close(true);
  }

  onCancel(): void {
    this.dialogRef.close(false);
  }
}
