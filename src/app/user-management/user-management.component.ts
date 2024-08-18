import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ConfirmDeleteTermComponent } from '../message/confirm-delete-term/confirm-delete-term.component';
import { UserManagementService } from '../services/user-management.service';
import { User } from '../use.model';
import { ConfirmDeleteUserComponent } from '../message/confirm-delete-user/confirm-delete-user.component';
@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrl: './user-management.component.scss'
})
export class UserManagementComponent implements OnInit{
  users: User[] = [];
  error: string | null = null;
descriptions: string[] = [];
p: number = 1;

  constructor(private router: Router, public dialog: MatDialog,private userManagementService: UserManagementService) {}
  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userManagementService.LoadUsers().subscribe({
      next: (data) => this.users = data,
      error: (err) => this.error = err.message
    });
  }

  openConfirmationDialog(userId: string): void {
    const dialogRef = this.dialog.open(ConfirmDeleteUserComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteUser(userId);
      }
    });
  }
  deleteUser(userId: string): void {
    this.userManagementService.deleteUser(userId).subscribe(
      () => {
        alert('User deleted successfully');
        window.location.reload();
      },
      (error: any) => {
        console.error('Error deleting user:', error);
        alert('An error occurred while deleting the user.');
      }
    );
  }

}
