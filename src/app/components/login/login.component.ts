import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  loginError: string | null = null;
  emailError: string | null = null;
  passwordError: string | null = null;
  loginSuccess: string | null = null;

  constructor(private router: Router, private authService: AuthService, private userService: UserService) { }

  onBack() {
    this.router.navigate(['/home']);
  }

  onLogin() {
    this.emailError = null;
    this.passwordError = null;
    this.loginError = null;
    this.loginSuccess = null;

    if (!this.email) {
      this.emailError = 'Email is required.';
      return;
    }

    if (!this.password) {
      this.passwordError = 'Password is required.';
      return;
    }

    this.authService.login(this.email, this.password).subscribe({
      next: (response) => {
        if (response) {
          console.log('Login successful', response);
          
          // Save user and roles to localStorage
          localStorage.setItem('user', JSON.stringify(response.user));
          localStorage.setItem('roles', JSON.stringify(response.roles));
          
          // Set user and roles in UserService
          this.userService.setUser(response.user);
          this.userService.setRoles(response.roles);

          // Show success message
          this.loginSuccess = 'Login successfully ^^ Welcome ' + this.userService.getUser()?.fullName;

          // Navigate to home page after a short delay
          setTimeout(() => {
            this.router.navigate(['/home']);
          }, 2000);
        } else {
          this.loginError = 'Login failed. Please check your email and password.';
        }
      },
      error: (error) => {
        console.error('Login failed', error);
        this.loginError = 'Login failed. Please check your email and password.';
      }
    });
  }
}