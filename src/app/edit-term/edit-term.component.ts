import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { TermService } from '../services/term-service/term.service';
import { ConfirmStartTermComponent } from '../message/confirm-start-term/confirm-start-term.component';
import { Term, TermStatus, Duration } from '../services/term-service/term.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConfirmEndTermComponent } from '../message/confirm-end-term/confirm-end-term.component';

@Component({
  selector: 'app-edit-term',
  templateUrl: './edit-term.component.html',
  styleUrls: ['./edit-term.component.scss']
})
export class EditTermComponent implements OnInit {
  termId: string | null = null;
  term: Term = {
    id: '',
    termName: '',
    duration: Duration.Monthly,
    startDate: new Date(),
    endDate: new Date(),  
    planDueDate: new Date(),
    reportDueDate: new Date(),
    status: TermStatus.New
  };

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private termService: TermService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.termId = params['id'];
      if (this.termId) {
        this.loadTermDetails(this.termId);
      }
    });

    // Recalculate the end date whenever start date or duration changes
    this.calculateEndDate();
  }

  loadTermDetails(id: string): void {
    this.termService.viewTermDetails(id).subscribe(term => {
      this.term = term;
      this.calculateEndDate(); // Ensure end date is recalculated based on the loaded term details
    });
  }

  calculateEndDate(): void {
    if (this.term.startDate && this.term.duration) {
      const startDate = new Date(this.term.startDate);
      switch (this.term.duration) {
        case Duration.Monthly:
          startDate.setMonth(startDate.getMonth() + 1);
          break;
        case Duration.Quarterly:
          startDate.setMonth(startDate.getMonth() + 3);
          break;
        case Duration.HalfYear:
          startDate.setMonth(startDate.getMonth() + 6);
          break;
      }
      this.term.endDate = startDate;
      console.log("End Date:", this.term.endDate); 
    }
  }
  

  openConfirmationDialog(): void {
    const dialogRef = this.dialog.open(ConfirmStartTermComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.startTerm();
      }
    });
  }

  openConfirmationDialog1(): void {
    const dialogRef = this.dialog.open(ConfirmEndTermComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.endTerm();
      }
    });
  }

  startTerm(): void {
    if (this.termId) {
      this.termService.startTerm(this.termId).subscribe({
        next: () => {
          this.snackBar.open('Term status updated to In-progress!', 'Close', {
            duration: 3000,
            horizontalPosition: 'right',
            verticalPosition: 'top',
          });
          this.router.navigate(['/term-management']);
        },
        error: (errorMessage) => {
          this.snackBar.open(errorMessage, 'Close', {
            duration: 3000,
            horizontalPosition: 'right',
            verticalPosition: 'top',
          });
        }
      });
    }
  }

  endTerm(): void {
    if (this.termId) {
      this.termService.endTerm(this.termId).subscribe({
        next: () => {
          this.snackBar.open('Term status updated to Closed!', 'Close', {
            duration: 3000,
            horizontalPosition: 'right',
            verticalPosition: 'top',
          });
          this.router.navigate(['/term-management']);
        },
        error: (errorMessage) => {
          this.snackBar.open(errorMessage, 'Close', {
            duration: 3000,
            horizontalPosition: 'right',
            verticalPosition: 'top',
          });
        }
      });
    }
  }

  onCancel(): void {
    this.router.navigate(['/term-management']);
  }

  onSubmit(): void {
    this.calculateEndDate(); // Ensure end date is recalculated before submission
    if (this.termId) {
      this.termService.updateTerm(this.termId, this.term).subscribe({
        next: () => {
          this.snackBar.open('The term has been updated successfully!', 'Close', {
            duration: 3000,
            horizontalPosition: 'right',
            verticalPosition: 'top',
          });
          this.router.navigate(['/term-management']);
        },
        error: (errorMessage) => {
          this.snackBar.open(errorMessage, 'Close', {
            duration: 3000,
            horizontalPosition: 'right',
            verticalPosition: 'top',
          });
        }
      });
    }
  }
}
