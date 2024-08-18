import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {Term, TermStatus} from './term.model';
@Injectable({
  providedIn: 'root'
})
export class TermService {
  private baseUrl = 'https://localhost:7273/TermManagement'; // your URL API 
  constructor(private http: HttpClient) {}

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${error.error.message}`;
    } else {
      errorMessage = error.error || 'Server returned an error';
    }
    return throwError(errorMessage);
  }
  


  
  getTerms(): Observable<Term[]> {
    return this.http.get<Term[]>(`${this.baseUrl}/GetTerms`);
  }

  addTerm(term: Term): Observable<Term> {
    return this.http.post<Term>(`${this.baseUrl}/AddTerm`, term).pipe(
      catchError(this.handleError));
  }

  updateTerm(id: string, term: Term): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/UpdateTerm/${id}`, term).pipe(
      catchError(this.handleError));
  }

  deleteTerm(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/DeleteTerm/${id}`).pipe(
      catchError(this.handleError));
  }

  searchTermsByName(name: string): Observable<Term[]> {
    return this.http.get<Term[]>(`${this.baseUrl}/SearchTermsByName/${name}`);
  }

  viewTermDetails(id: string): Observable<Term> {
    return this.http.get<Term>(`${this.baseUrl}/ViewTermDetails/${id}`);
  }
  getTermsByStatus(status: TermStatus): Observable<Term[]> {
    return this.http.get<Term[]>(`${this.baseUrl}/GetTermsByStatus/${status}`);
  }
  startTerm(id: string): Observable<void> {
    return this.http.post<void>(`${this.baseUrl}/StartTerm/${id}`, {}).pipe(
      catchError(this.handleError));
  }
  endTerm(id: string): Observable<void> {
    return this.http.post<void>(`${this.baseUrl}/EndTerm/${id}`, {}).pipe(
      catchError(this.handleError));
  }
}
