import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ConfirmDeleteMonthReportComponent } from '../message/confirm-delete-month-report/confirm-delete-month-report.component';
import { MonthlyReportService } from '../services/monthreport/monthly-report.service';
import { Department, DepartmentType } from '../models/department-model';
import { Terms } from '../models/term.model';

@Component({
  selector: 'app-monthly-report-list',
  templateUrl: './monthly-report-list.component.html',
  styleUrls: ['./monthly-report-list.component.scss']
})
export class MonthlyReportListComponent implements OnInit {
  monthlyReports: any[] = [];
  departments: Department[] = [
    { $id: '1', departmentName: DepartmentType.IT, user: null, id: '1', isDeleted: false, insertedAt: '', updatedAt: '' },
    { $id: '2', departmentName: DepartmentType.HR, user: null, id: '2', isDeleted: false, insertedAt: '', updatedAt: '' },
    { $id: '3', departmentName: DepartmentType.Finance, user: null, id: '3', isDeleted: false, insertedAt: '', updatedAt: '' },
    { $id: '4', departmentName: DepartmentType.Communication, user: null, id: '4', isDeleted: false, insertedAt: '', updatedAt: '' },
    { $id: '5', departmentName: DepartmentType.Marketing, user: null, id: '5', isDeleted: false, insertedAt: '', updatedAt: '' },
    { $id: '6', departmentName: DepartmentType.Accounting, user: null, id: '6', isDeleted: false, insertedAt: '', updatedAt: '' }
  ];
  terms: Terms[] = [];
  searchText: string = '';
  p: number = 1;
  selectedDepartmentName: string | null = null;

  constructor(
    private reportService: MonthlyReportService,
    private router: Router,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loadMonthlyReports();
    this.loadTerms();
  }

  loadMonthlyReports(): void {
    this.reportService.getMonthlyReports().subscribe(
      (data) => {
        this.monthlyReports = data;
        this.filterReports(); // Apply filters after loading reports
        console.log('Dữ liệu báo cáo tháng:', data);
        if (this.monthlyReports.length === 0) {
          console.log('Không có báo cáo nào.');
        }
      },
      (error: any) => {
        console.error('Lỗi khi lấy dữ liệu báo cáo tháng:', error);
      }
    );
  }

  filterReports(): void {
    this.reportService.getMonthlyReports().subscribe(
      (data) => {
        this.monthlyReports = data.filter(report =>
          (this.selectedDepartmentName ? report.departmentName === this.selectedDepartmentName : true) &&
          (this.searchText ? report.fileReportName.toLowerCase().includes(this.searchText.toLowerCase()) : true)
        );
      },
      (error: any) => {
        console.error('Lỗi khi lấy dữ liệu báo cáo tháng:', error);
      }
    );
  }

  loadTerms(): void {
    this.reportService.getTerms().subscribe(
      (terms: Terms[]) => {
        this.terms = terms;
      },
      (error: any) => {
        console.error('Lỗi khi lấy dữ liệu Term:', error);
      }
    );
  }

  onDepartmentChange(event: any): void {
    this.selectedDepartmentName = event.target.value;
    this.filterReports();
  }

  openConfirmationDialog(termId: string, departmentId: string): void {
    const dialogRef = this.dialog.open(ConfirmDeleteMonthReportComponent, {
      width: '400px',
      data: { termId: termId, departmentId: departmentId }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteReport(termId, departmentId);
      }
    });
  }

  deleteReport(termId: string, departmentId: string): void {
    this.reportService.deleteReportsByTermIdAndDepartmentId(termId, departmentId).subscribe(
      () => {
        console.log(`Báo cáo với Term ID ${termId} và Department ID ${departmentId} đã được xóa thành công.`);
        this.loadMonthlyReports(); // Reload the reports after deletion
      },
      (error: any) => {
        console.error('Lỗi khi xóa báo cáo:', error);
      }
    );
  }

  exportReportList(): void {
    this.reportService.exportReportList().subscribe(
      (blob: Blob) => {
        // Tạo đối tượng URL từ Blob
        const url = window.URL.createObjectURL(blob);
        // Tạo liên kết ảo và tải file xuống
        const a = document.createElement('a');
        a.href = url;
        a.download = 'Monthly_Reports.xlsx'; // Tên file xuất
        a.click();
        window.URL.revokeObjectURL(url);
      },
      (error: any) => {
        console.error('Lỗi khi xuất báo cáo:', error);
      }
    );
  }

  searchReports(): void {
    this.filterReports();
  }

  getStatusLabel(status: number): string {
    switch (status) {
      case 1: return 'New';
      case 2: return 'Close';
      default: return 'Unknown';
    }
  }
}

