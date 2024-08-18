import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-end-term',
  templateUrl: './confirm-end-term.component.html',
  styleUrl: './confirm-end-term.component.scss'
})
export class ConfirmEndTermComponent {
  constructor(public dialogRef: MatDialogRef<ConfirmEndTermComponent>) {}

  onConfirm(): void {
    this.dialogRef.close(true);
  }

  onCancel(): void {
    this.dialogRef.close(false);
  }
}
