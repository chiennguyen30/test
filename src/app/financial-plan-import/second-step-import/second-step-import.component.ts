import { Component } from '@angular/core';
import { FinancialPlanService } from '../../services/financial-plan/financial-plan.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UploadService } from '../../services/upload/upload.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-second-step-import',
  templateUrl: './second-step-import.component.html',
  styleUrl: './second-step-import.component.scss'
})
export class SecondStepImportComponent {
  selectedFile: File | null = null;
  fileData: any[] = [];
  headers: string[] = [];

  constructor(private planService: FinancialPlanService, private router: Router, private uploadService: UploadService) { }

  ngOnInit(): void {
    this.selectedFile = this.uploadService.getFile();
    if (this.selectedFile) {
      this.readFile(this.selectedFile);
    } else {
      console.error('No file selected for import.');
      this.router.navigate(['/first-step-import']);
    }
  }

  readFile(file: File): void {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      const binaryStr = e.target.result;
      const wb = XLSX.read(binaryStr, { type: 'binary' });
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      const data = XLSX.utils.sheet_to_json(ws, { header: 1 }) as any[][];

      if (data.length >= 3) {
        this.headers = data[1]; // Second row as headers
        this.fileData = data.slice(2).map((row: any) => {
          const rowData: any = {};
          this.headers.forEach((header, index) => {
            rowData[header] = row[index];
          });
          return rowData;
        });
      } else {
        console.error('File does not contain enough data.');
      }
    };
    reader.readAsBinaryString(file);
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
