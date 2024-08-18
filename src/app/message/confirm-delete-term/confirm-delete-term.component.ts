import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-delete-term',
  templateUrl: './confirm-delete-term.component.html',
  styleUrl: './confirm-delete-term.component.scss'
})
export class ConfirmDeleteTermComponent {
  constructor(public dialogRef: MatDialogRef<ConfirmDeleteTermComponent>) {}

  onConfirm(): void {
    this.dialogRef.close(true);
  }

  onCancel(): void {
    this.dialogRef.close(false);
  }
}
