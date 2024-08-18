import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MonthlyReportService } from '../services/monthreport/monthly-report.service';
import { ReportItem } from '../models/ReportItem';
import { MatSnackBar } from '@angular/material/snack-bar'; // Thêm MatSnackBar để hiển thị thông báo
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-import-report-step2',
  templateUrl: './import-report-step2.component.html',
  styleUrls: ['./import-report-step2.component.scss']
})
export class ImportReportStep2Component implements OnInit {
  term?: string;
  month?: string;
  file?: string;
  p: number =1;
  reportData: ReportItem[] = [];
  department: string = '';

  constructor(
    private router: Router,
    private reportService: MonthlyReportService,
    private snackBar: MatSnackBar, // Thêm MatSnackBar vào constructor
    private authService: AuthService // Thêm AuthService vào constructor
  ) { }

  ngOnInit(): void {
    const state = history.state as { term?: string; month?: string; file?: string; fileObject?: File };
    console.log('Received state data:', state);
    if (state) {
      this.term = state.term;
      this.month = state.month;
      this.file = state.file;

      if (state.fileObject) {
        console.log('Calling readFile with file:', state.fileObject);
        this.readFile(state.fileObject);
      }
    } else {
      console.error('No state data received.');
    }
  }

  readFile(file: File): void {
    this.reportService.readFile(file).subscribe(
      data => {
        console.log('Report data:', data);
        this.reportData = data;  
        if (this.reportData.length > 0) {
          this.department = this.reportData[0].department || '';
        }
      },
      error => {
        console.error('Error reading file', error);
      }
    );
  }

  submitReport(): void {
    const userId = this.authService.getUserId(); // Lấy ID người dùng từ AuthService
  
    if (!userId) {
      console.error('User ID is not available.');
      this.snackBar.open('User ID is not available. Please log in again.', 'Close', { duration: 3000 });
      return;
    }
  
    const reportDataToSubmit = {
      isDeleted: false, // Hoặc true nếu cần thiết
      insertedAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      financialPlanName: '', // Thay đổi theo yêu cầu của bạn
      fileReportName: this.file, // Đảm bảo tên file chính xác
      uploadedBy: userId, // Sử dụng ID người dùng thực tế
      version: 1, // Hoặc bất kỳ số phiên bản nào bạn cần
      uploadedDate: new Date().toISOString(),
      termName: this.term, // Đảm bảo giá trị term là hợp lệ
      departmentName: this.department, // Đảm bảo giá trị department là hợp lệ
      month: this.month, // Đảm bảo giá trị month là hợp lệ
      reportData: this.reportData.map(item => ({
        expense: item.expense,
        costType: item.costType, // Đảm bảo giá trị costType hợp lệ
        unitPrice: item.unitPrice,
        amount: item.amount,
        total: item.total,
        projectName: item.projectName,
        supplierName: item.supplierName,
        pic: item.pic,
        notes: item.notes
      }))
    };
  
    console.log('Submitting report data:', reportDataToSubmit);
  
    this.reportService.importMonthlyReport(reportDataToSubmit).subscribe(
      response => {
        console.log('Report submitted successfully:', response);
        this.snackBar.open('Report submitted successfully!', 'Close', { duration: 3000 });
      },
      error => {
        console.error('Error submitting report:', error);
        let errorMessage = 'Failed to submit report. Please try again later.';
        if (error.error && error.error.errors) {
          errorMessage = Object.values(error.error.errors).flat().join(' ');
        }
        this.snackBar.open(errorMessage, 'Close', { duration: 3000 });
      }
    );
  }
}  
