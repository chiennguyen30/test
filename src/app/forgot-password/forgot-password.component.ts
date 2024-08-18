import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {
  forgotPasswordForm: FormGroup;
  resetLink: string | null = null;

  constructor(
    private router: Router,
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) {
    this.forgotPasswordForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSend() {
    if (this.forgotPasswordForm.valid) {
      const email = this.forgotPasswordForm.get('email')?.value;
      this.authService.forgotPassword(email).subscribe(
        resetLink => {
          if (resetLink) {
            this.resetLink = resetLink;
            alert('Password reset link has been sent to your email address.');
          } else {
            alert('Failed to send password reset link. Please try again later.');
          }
        },
        error => {
          console.error('Error sending password reset link', error);
          alert('Failed to send password reset link. Please try again later.');
        }
      );
    } else {
      alert('Please enter a valid email address.');
    }
  }

  onCancel() {
    this.router.navigate(['/login']);
  }
}
