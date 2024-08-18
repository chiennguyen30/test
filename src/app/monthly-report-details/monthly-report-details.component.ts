import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MonthlyReportService } from '../services/monthreport/monthly-report.service';
import { ReportItem } from '../models/ReportItem';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-monthly-report-details',
  templateUrl: './monthly-report-details.component.html',
  styleUrls: ['./monthly-report-details.component.scss']
})
export class MonthlyReportDetailsComponent implements OnInit {
  termId: string = '';
  reportItems$: Observable<ReportItem[]> = of([]);
  totalItems$: Observable<number> = of(0);
  firstReportItem: ReportItem | undefined;
  totalExpense: number = 0;
  biggestExpenditure: string = 'N/A';
  p: number =1;
  departmentId: any;

  constructor(
    private route: ActivatedRoute,
    private monthlyReportService: MonthlyReportService
  ) {}

  ngOnInit(): void {
    // Lấy termId và departmentId từ route parameters
    this.route.paramMap.subscribe(params => {
      this.termId = params.get('termId')!;
      this.departmentId = params.get('departmentId')!;
      this.loadReportItems();
    });
  }

  loadReportItems(): void {
    if (!this.termId || !this.departmentId) {
      console.error('termId or departmentId is not provided');
      return;
    }

    this.monthlyReportService.getMonthlyReportDetails(this.termId, this.departmentId).subscribe(
      (data: ReportItem[]) => {
        this.reportItems$ = of(data); // Cập nhật dữ liệu
        this.firstReportItem = data[0]; // Lưu thông tin của đối tượng đầu tiên
        this.calculateTotals(data); // Tính toán tổng chi phí và chi phí lớn nhất
        console.log('Data received:', data);
      },
      (error) => {
        console.error('Error fetching report items:', error);
      }
    );
  }


  calculateTotals(items: ReportItem[]): void {
    if (items.length === 0) return;

    // Tính tổng chi phí
    this.totalExpense = items.reduce((sum, item) => sum + item.total, 0);

    // Tìm chi phí lớn nhất
    const maxItem = items.reduce((max, item) => item.total > max.total ? item : max, items[0]);
    this.biggestExpenditure = maxItem ? maxItem.expense : 'N/A';
  }
  exportReport(): void {
    if (!this.termId || !this.departmentId) {
      console.error('termId or departmentId is not provided');
      return;
    }

    this.monthlyReportService.exportReport(this.termId, this.departmentId).subscribe(
      (blob: Blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'MonthlyReport.xlsx';
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
      },
      (error) => {
        console.error('Error exporting report:', error);
      }
    );
  }
  
}
