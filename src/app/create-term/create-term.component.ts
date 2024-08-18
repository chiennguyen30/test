import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TermService } from '../services/term-service/term.service';
import { Term, TermStatus, Duration } from '../services/term-service/term.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-term',
  templateUrl: './create-term.component.html',
  styleUrls: ['./create-term.component.scss']
})
export class CreateTermComponent implements OnInit {
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

  durationValues = Object.values(Duration);

  constructor(private router: Router, private termService: TermService, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.calculateEndDate(); // Initialize EndDate based on initial StartDate and Duration
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
    }
  }

  

  onCancel(): void {
    this.router.navigate(['/term-management']);
  }

  onSubmit(): void {
    
    this.termService.addTerm(this.term).subscribe({
      next: () => {
        this.snackBar.open('A new term has been successfully added!', 'Close', {
          duration: 3000,
          horizontalPosition: 'right',
          verticalPosition: 'top',
        });
        this.router.navigate(['/term-management']);
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
