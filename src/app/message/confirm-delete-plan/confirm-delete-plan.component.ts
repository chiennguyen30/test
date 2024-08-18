import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-delete-plan',
  templateUrl: './confirm-delete-plan.component.html',
  styleUrl: './confirm-delete-plan.component.scss'
})
export class ConfirmDeletePlanComponent {
  constructor(public dialogRef: MatDialogRef<ConfirmDeletePlanComponent>) {}

  onConfirm(): void {
    this.dialogRef.close(true);
  }

  onCancel(): void {
    this.dialogRef.close(false);
  }
}
