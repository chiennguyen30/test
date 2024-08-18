import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiResponse, ReportItem } from '../../models/ReportItem';
import { HeaderComponent } from '../../components/header/header.component';
import { Department } from '../../models/department-model';
import { Term } from '../term-service/term.model';
import { Terms } from '../../models/term.model';

@Injectable({
  providedIn: 'root'
})
export class MonthlyReportService {
  private apiUrl = 'https://localhost:7273/api/MonthlyReport/report-month';
  private readFileUrl = 'https://localhost:7273/api/MonthlyReport/read-file-month-report';
  private reportDetailsUrl = 'https://localhost:7273/api/MonthlyReport/month-report-details';
  private exportUrl = 'https://localhost:7273/api/MonthlyReport/export-month-report';
  private departmentURL = 'https://localhost:7273/api/Department/get-all-department';
  private termURL = 'https://localhost:7273/api/MonthlyReport/get-all-term';
  private importURL = 'https://localhost:7273/api/MonthlyReport/import-step2';
  private deleteUrl = 'https://localhost:7273/api/MonthlyReport/reports';
  private exportReportURL = 'https://localhost:7273/api/MonthlyReport/export-monthly-reports';

  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

  // Phương thức lấy danh sách các Monthly Reports
  getMonthlyReports(): Observable<ReportItem[]> {
    return this.http.get<ReportItem[]>(this.apiUrl).pipe(
      catchError(error => {
        console.error('Error fetching monthly reports:', error);
        this.snackBar.open('Failed to load monthly reports. Please try again later.', 'Close', { duration: 3000 });
        return of([]); // Trả về mảng rỗng nếu có lỗi
      })
    );
  }
  

  // Phương thức đọc file
  readFile(file: File): Observable<ReportItem[]> {
    const formData = new FormData();
    formData.append('file', file);

    return this.http.post<ReportItem[]>(this.readFileUrl, formData).pipe(
      catchError(error => {
        console.error('Error reading file:', error);
        this.snackBar.open('Failed to read the file. Please try again later.', 'Close', { duration: 3000 });
        return of([]); // Trả về mảng rỗng nếu có lỗi
      })
    );
  }

 
  // Phương thức lấy chi tiết Monthly Report với termId và departmentId
  getMonthlyReportDetails(termId: string, departmentId: string): Observable<ReportItem[]> {
    const url = `${this.reportDetailsUrl}/${termId}/${departmentId}`;
    return this.http.get<ReportItem[]>(url).pipe(
      catchError(error => {
        console.error('Error fetching report details:', error);
        this.snackBar.open('Failed to load report details. Please try again later.', 'Close', { duration: 3000 });
        return of([]); 
      })
    );
  }

   // Phương thức export báo cáo theo termId và departmentId
   exportReport(termId: string, departmentId: string): Observable<Blob> {
    const url = `${this.exportUrl}/${termId}/${departmentId}`;
    return this.http.get(url, { responseType: 'blob' }).pipe(
      catchError(error => {
        console.error('Error exporting report:', error);
        this.snackBar.open('Failed to export report. Please try again later.', 'Close', { duration: 3000 });
        return of(new Blob()); // Trả về một blob rỗng nếu có lỗi
      })
    );
  }

  // Phương thức export danh sách báo cáo
  exportReportList(): Observable<Blob> {
    return this.http.get(this.exportReportURL, { responseType: 'blob' }).pipe(
      catchError(error => {
        console.error('Error exporting report list:', error);
        this.snackBar.open('Failed to export report list. Please try again later.', 'Close', { duration: 3000 });
        return of(new Blob()); // Trả về một blob rỗng nếu có lỗi
      })
    );
  }

  // Phương thức lấy danh sách Departments
  getDepartments(): Observable<Department[]> {
    return this.http.get<Department[]>(this.departmentURL).pipe(
      catchError(error => {
        console.error('Error fetching departments:', error);
        this.snackBar.open('Failed to load departments. Please try again later.', 'Close', { duration: 3000 });
        return of([]); // Trả về mảng rỗng nếu có lỗi
      })
    );
  }
  
  getTerms(): Observable<Terms[]> {
    return this.http.get<Terms[]>(this.termURL).pipe(
      catchError(error => {
        console.error('Error fetching terms:', error);
        this.snackBar.open('Failed to load terms. Please try again later.', 'Close', { duration: 3000 });
        return of([]); // Trả về mảng rỗng nếu có lỗi
      })
    );
  }

  importMonthlyReport(reportData: any): Observable<string> {
    return this.http.post(this.importURL, reportData, { responseType: 'text' }).pipe(
      map(response => {
        console.log('Received response from API:', response);
        
        return response; // Trả về chuỗi văn bản
      }),
      catchError(error => {
        console.error('Error importing monthly report:', error);
        this.snackBar.open('Failed to import monthly report. Please try again later.', 'Close', { duration: 3000 });
        console.error('Error details:', error.error);
        return throwError(error); // Trả về lỗi để xử lý ở nơi khác nếu cần
      })
    );
  }
  
  
  

 // Phương thức xóa báo cáo theo termId và departmentId
deleteReportsByTermIdAndDepartmentId(termId: string, departmentId: string): Observable<void> {
  const url = `${this.deleteUrl}/${termId}/${departmentId}`;
  return this.http.delete<void>(url).pipe(
    catchError(error => {
      console.error('Error deleting reports:', error);
      this.snackBar.open('Failed to delete reports. Please try again later.', 'Close', { duration: 3000 });
      return throwError(error); // Trả về lỗi để xử lý ở nơi khác nếu cần
    })
  );
}

}

