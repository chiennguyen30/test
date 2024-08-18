import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TermService } from '../services/term-service/term.service';
import { Term } from '../services/term-service/term.model';

@Component({
  selector: 'app-import-report-step1',
  templateUrl: './import-report-step1.component.html',
  styleUrls: ['./import-report-step1.component.scss']
})
export class ImportReportStep1Component implements OnInit {
  terms: string[] = [];
  months: string[] = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  constructor(private termService: TermService, private router: Router) { }

  onSubmit(termSelect: HTMLSelectElement, monthSelect: HTMLSelectElement, fileInput: HTMLInputElement) {
    const term = termSelect.value;
    const month = monthSelect.value;
    const file = fileInput.files?.[0];

    if (file) {
      const fileName = file.name;
      console.log('Submitting data:', { term, month, file: fileName });
      this.router.navigate(['/import-report-step2'], {
        state: { term, month, file: fileName, fileObject: file }
      });
    } else {
      console.error('No file selected.');
    }
  }

  ngOnInit(): void {
    this.termService.getTerms().subscribe(
      (data: Term[]) => {
        this.terms = data.map(term => term.termName); // Chuyển đổi từ Term[] sang string[]
      },
      (error) => {
        console.error('Error fetching terms', error);
      }
    );
  }
  
  
}
