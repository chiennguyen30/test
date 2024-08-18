import { Component } from '@angular/core';
import { FinancialPlanService } from '../../services/financial-plan/financial-plan.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UploadService } from '../../services/upload/upload.service';

@Component({
  selector: 'app-first-step-import',
  templateUrl: './first-step-import.component.html',
  styleUrl: './first-step-import.component.scss'
})
export class FirstStepImportComponent {
  selectedFile: File | null = null;

  constructor(private planService: FinancialPlanService, private router: Router, private uploadService: UploadService) { }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      this.uploadService.setFile(file);
      console.log('File selected:', file.name);
    }
    else {
      console.log('No file selected.');
    }
  }

  importPlan(): void {
    if (this.selectedFile) {
      this.planService.addPlan(this.selectedFile).subscribe(
        response => {
          console.log('Financial plans imported successfully:', response);
          this.router.navigate(['/financial-staff-financial-plan-list']);
        },
        error => {
          console.error('Failed to import financial plans:', error);
        }
      );
    } else {
      console.error('No file selected for import.');
    }
  }
}
