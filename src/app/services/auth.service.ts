import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { UserService } from './user.service';
export interface LogoutResquest{
  Token : string,
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'https://localhost:7273/api/Auth'; // URL API
  private tokenKey = 'jwtToken';

  constructor(private http: HttpClient, private userService: UserService) { }

  // Method to initialize the authentication state
  initializeAuthState(): void {
    const token = this.getToken();
    const user = this.getUser();
    const roles = this.getRoles();
    
    if (token) {
      this.userService.setUser(user);
      this.userService.setRoles(roles);
    }
  }

  login(email: string, password: string): Observable<any> {
    const loginRequest = { email, password };
    return this.http.post<any>(`${this.baseUrl}/login`, loginRequest)
      .pipe(
        map(response => {
          if (response && response.token) {
            console.log(response);
            this.setToken(response.token);
            this.userService.setUser(response.user); 
            this.userService.setRoles(response.roles);
            if (response.user && response.user.id) {
              localStorage.setItem('userId', response.user.id); // Lưu ID người dùng
            }
            this.userService.setUser(response.user);
          }
          return response;
        }),
        catchError(error => {
          console.error('Login error:', error);
          return of(null);
        })
      );
  }

  forgotPassword(email: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/forgot-password`, { email })
      .pipe(
        map(response => response.resetLink),
        catchError(error => {
          console.error('Forgot password error:', error);
          return of(null);
        })
      );
  }

  resetPassword(email: string, token: string, newPassword: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/reset-password`, { email, token, newPassword })
      .pipe(
        catchError(error => {
          console.error('Reset password error:', error);
          return of(null);
        })
      );
  }

  setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  getToken(): string | null {
    console.log(localStorage.getItem('jwtToken'));
    return localStorage.getItem('jwtToken');
  }

  getUser(): any {
    return JSON.parse(localStorage.getItem('user') || 'null');
  }
  
  getUserId(): string | null {
    return localStorage.getItem('userId');
  }

  getRoles(): any {
    return JSON.parse(localStorage.getItem('roles') || 'null');
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  logout(): Observable<void> {
    let token = this.getToken();
    return this.http.get<void>(`https://localhost:7273/Account/logout/${token}`)
      .pipe(
        map(() => {
          this.removeToken();
          this.userService.logout();
        }),
        catchError(error => {
          console.log(error, "check err");
          this.removeToken();
          this.userService.logout();
          return of();
        })
      );
  }
  // logout(): void {
  //   let token = this.getToken();
  //   this.http.get<any>(`https://localhost:7273/api/Account/logout/{token}`)
  //     .subscribe({
  //       next: () => {
  //         this.removeToken();
  //         this.userService.logout();
  //       },
  //       error: (error) => {
  //         console.log(error, "check err");
  //         this.removeToken();
  //         this.userService.logout();
  //       }
  //     });
  // }
  
  private removeToken(): void {
    localStorage.clear();
  }
}
