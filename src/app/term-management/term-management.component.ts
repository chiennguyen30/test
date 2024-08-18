import { Component, OnInit  } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDeleteTermComponent } from '../message/confirm-delete-term/confirm-delete-term.component';
import { TermService } from '../services/term-service/term.service';
import {Term,TermStatus,Duration} from '../services/term-service/term.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../../app/services/auth.service';
import {UserService } from '../../app/services/user.service';
@Component({
  selector: 'app-term-management',
  templateUrl: './term-management.component.html',
  styleUrl: './term-management.component.scss'
})
export class TermManagementComponent implements OnInit {
  terms: Term[] = [];
  p: number = 1;
  searchName: string = '';
  selectedStatus: TermStatus | '' = '';
  termStatuses: TermStatus[] = [TermStatus.New, TermStatus.InProgress, TermStatus.Closed];
  constructor(
    private router: Router,
    private termService: TermService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar,
    public userService: UserService,
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    this.loadTerms();
  }

  loadTerms(): void {
    this.termService.getTerms().subscribe((data) => {
      this.terms = data;
    });
  }

  termDetails(term: Term): void {
    this.router.navigate(['/term-details'], { queryParams: { id: term.id } });
  }

  editTerm(term: Term): void {
    this.router.navigate(['/edit-term'], { queryParams: { id: term.id } });
  }



  deleteTerm(term: Term): void {
    const dialogRef = this.dialog.open(ConfirmDeleteTermComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const termId = term.id?.toString(); // Convert id to string if it's defined

        if (termId) {
          this.termService.deleteTerm(termId).subscribe({
            next: () => {
              this.terms = this.terms.filter(t => t.id !== term.id);
              this.snackBar.open('Term has been successfully deleted!', 'Close', {
                duration: 3000, // Duration in milliseconds
                horizontalPosition: 'right',
                verticalPosition: 'top',
              });
            },
            error: (errorMessage) => {
              this.snackBar.open(errorMessage, 'Close', {
                duration: 3000, // Duration in milliseconds
                horizontalPosition: 'right',
                verticalPosition: 'top',
              });
            }
          });
        }
      }
    });
  }

searchTermsByName(): void {
  if (this.searchName.trim()) {
    this.termService.searchTermsByName(this.searchName).subscribe({
      next: (data) => {
        this.terms = data;
      },
      error: (err) => {
        this.snackBar.open('No items match your credentials, please try again.', 'Close', {
          duration: 3000,
          horizontalPosition: 'right',
          verticalPosition: 'top',
        });
      }
    });
  } else {
    this.loadTerms(); // If the search input is empty, load all terms
  }
}


  filterTermsByStatus(): void {
    if (this.selectedStatus) {
      this.termService.getTermsByStatus(this.selectedStatus).subscribe((data) => {
        this.terms = data;
      });
    } else {
      this.loadTerms(); 
    }
  }
  get isAdmin(): boolean {
    return this.userService.isAdmin();
  }

  get isAccountant(): boolean {
    return this.userService.isAccountant();
  }

  get isFinancialStaff(): boolean {
    return this.userService.isFinancialStaff();
  }
}
