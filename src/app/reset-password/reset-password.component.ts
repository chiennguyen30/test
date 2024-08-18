import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  resetPasswordForm: FormGroup;
  token: string | null = null;
  email: string | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.resetPasswordForm = this.formBuilder.group({
      password: ['', [
        Validators.required,
        Validators.minLength(7),
        Validators.pattern(/(?=.*[a-zA-Z])(?=.*\d)/)
      ]],
      confirmPassword: ['', Validators.required]
    }, { validator: this.passwordMatcher });
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.token = params['token'] || null;
      this.email = params['email'] || null;
    });
  }

  passwordMatcher(group: FormGroup): { [key: string]: boolean } | null {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { 'mismatch': true };
  }

  onReset(): void {
    if (this.resetPasswordForm.valid && this.token && this.email) {
      const { password } = this.resetPasswordForm.value;
      this.authService.resetPassword(this.email, this.token, password).subscribe(
        () => {
          alert('Password reset successfully');
          this.router.navigate(['/login']);
        },
        error => {
          console.error('Error resetting password', error);
          alert('Failed to reset password. Please try again later.');
        }
      );
    }
  }
}
