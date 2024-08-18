import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AnnualReportService {
  private baseUrl = 'https://localhost:7273/api/AnnualReport';

  constructor(private http: HttpClient) { }

  getAnnualReports(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/annual-reports`).pipe(
      catchError(this.handleError)
    );
  }

  getAnnualReportsByYear(year: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/annual-reports/${year}`).pipe(
      catchError(this.handleError)
    );
  }

  getAnnualReportDetailsByDepartment(year: number, departmentName: string): Observable<any> {
    const url = `${this.baseUrl}/annual-reports/${year}/details?departmentName=${departmentName}`;
    return this.http.get<any>(url).pipe(
      catchError(this.handleError)
    );
  }

  exportAnnualExpenseReport(year: number): Observable<Blob> {
    const url = `${this.baseUrl}/export/${year}`;
    return this.http.get(url, { responseType: 'blob' }).pipe(
      catchError(this.handleError)
    );
  }  

  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'An unexpected error occurred.';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Client-side error: ${error.error.message}`;
    } else {
      errorMessage = `Server-side error: ${error.status} - ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
