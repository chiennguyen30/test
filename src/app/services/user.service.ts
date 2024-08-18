import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private roles: string[] = [];
  private userSubject = new BehaviorSubject<any>(null);
  user$ = this.userSubject.asObservable();

  constructor() {
    const userData = localStorage.getItem('user');
    if (userData) {
      this.userSubject.next(JSON.parse(userData));
    }
  }

  setUser(user: any): void {
    this.userSubject.next(user);
    localStorage.setItem('user', JSON.stringify(user));
  }

  getUser(): any {
    return this.userSubject.value;
  }
  setRoles(roles: string[]): void {
    this.roles = roles;
  }

  getRoles(): string[] {
    return this.roles;
  }

  isAdmin(): boolean {
    return this.roles.includes('Admin');
  }

  isAccountant(): boolean {
    return this.roles.includes('Accountant');
  }

  isFinancialStaff(): boolean {
    return this.roles.includes('FinancialStaff');
  }

  isLoggedIn(): boolean {
    return this.userSubject.value !== null;
  }

  logout(): void {
    localStorage.clear();
  }
}
