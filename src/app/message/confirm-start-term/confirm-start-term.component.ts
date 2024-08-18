import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-start-term',
  templateUrl: './confirm-start-term.component.html',
  styleUrl: './confirm-start-term.component.scss'
})
export class ConfirmStartTermComponent {
  constructor(public dialogRef: MatDialogRef<ConfirmStartTermComponent>) {}

  onConfirm(): void {
    this.dialogRef.close(true);
  }

  onCancel(): void {
    this.dialogRef.close(false);
  }
}
