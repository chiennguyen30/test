import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnnualReportService } from '../services/annual-report.service';

@Component({
  selector: 'app-annual-report',
  templateUrl: './annual-report.component.html',
  styleUrls: ['./annual-report.component.scss']
})
export class AnnualReportComponent implements OnInit {
  reports: any[] = [];
  filteredReports: any[] = [];
  paginatedReports: any[] = [];
  errorMessage: string = '';
  searchByYear: string = '';
  totalResults: number = 0;
  itemsPerPage: number = 5;
  currentPage: number = 1;
  Math = Math; 

  constructor(private annualReportService: AnnualReportService, private router: Router) { }

  ngOnInit(): void {
    this.getAnnualReports();
  }

  getAnnualReports(): void {
    this.annualReportService.getAnnualReports().subscribe(
      (data) => {
        this.reports = data;
        this.filteredReports = data;
        this.totalResults = data.length;
        this.updatePaginatedReports();
      },
      (error) => this.errorMessage = error
    );
  }

  search(): void {
    this.filterReports();
    this.currentPage = 1; 
    this.updatePaginatedReports();
  }

  filterReports(): void {
    if (!this.searchByYear) {
      this.filteredReports = this.reports;
    } else {
      const yearQuery = parseInt(this.searchByYear, 10);
      this.filteredReports = this.reports.filter(report =>
        report.year === yearQuery
      );
    }

    this.totalResults = this.filteredReports.length;

    if (this.filteredReports.length === 0) {
      this.errorMessage = 'No items match your credentials, please try again.';
    } else {
      this.errorMessage = '';
    }
    
    this.updatePaginatedReports();
  }

  updatePaginatedReports(): void {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    this.paginatedReports = this.filteredReports.slice(start, end);
  }

  changePage(increment: number): void {
    const newPage = this.currentPage + increment;
    const maxPage = Math.ceil(this.totalResults / this.itemsPerPage);
    if (newPage > 0 && newPage <= maxPage) {
      this.currentPage = newPage;
      this.updatePaginatedReports();
    }
  }
}
