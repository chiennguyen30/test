import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from '../use.model';

@Injectable({
  providedIn: 'root'
})
export class UserManagementService {
  private apiUrl = 'https://localhost:7273/api/User';

  constructor(private http: HttpClient) { }

  // Phương thức để lấy danh sách người dùng
  LoadUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }
    // Phương thức để lấy thông tin chi tiết của một người dùng theo ID
    getUserById(id: string): Observable<User> {
      return this.http.get<User>(`${this.apiUrl}/${id}`).pipe(
        catchError(this.handleError)
      );
    }

    updateUser(id: string, user: User): Observable<User> {
      return this.http.put<User>(`${this.apiUrl}/${id}`, user).pipe(
        catchError(this.handleError)
      );
    }

    createUser(user: User): Observable<User> {
      return this.http.post<User>(this.apiUrl, user).pipe(
        catchError(this.handleError)
      );
    }
    
    deleteUser(id: string): Observable<void> {
      return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(
        catchError(this.handleError)
      );
    }
  // Xử lý lỗi khi gọi API
  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error occurred!';
    if (error.error instanceof ErrorEvent) {
      // Xử lý lỗi client-side
      errorMessage = `An error occurred: ${error.error.message}`;
    } else {
      // Xử lý lỗi server-side
      errorMessage = `Server returned code ${error.status}, error message is: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));
  }
}
