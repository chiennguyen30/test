import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-delete-user',
  templateUrl: './confirm-delete-user.component.html',
  styleUrl: './confirm-delete-user.component.scss'
})
export class ConfirmDeleteUserComponent {
  constructor(public dialogRef: MatDialogRef<ConfirmDeleteUserComponent>) {}

  onConfirm(): void {
    this.dialogRef.close(true);
  }

  onCancel(): void {
    this.dialogRef.close(false);
  }
}
