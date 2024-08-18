import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog'; // Import MatDialog
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';
import { ConfirmLogoutComponent } from '../../message/confirm-logout/confirm-logout.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  showNav = true;
  showLogin = true;
  loading: boolean = false;

  constructor(
    public router: Router,
    public userService: UserService,
    public authService: AuthService,
    public dialog: MatDialog // Inject MatDialog
  ) { }

  ngOnInit(): void {
    this.showLogin = !this.authService.isLoggedIn();

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const isResetPasswordPage = this.router.url.includes('reset-password');
        this.showNav = !isResetPasswordPage;
        this.showLogin = !isResetPasswordPage || !this.authService.isLoggedIn();
      }
    });

    this.userService.user$.subscribe(user => {
      // Handle user updates here
    });
  }

  confirmLogout() {
    const dialogRef = this.dialog.open(ConfirmLogoutComponent); // Open the dialog

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.logout(); // Proceed with logout if confirmed
      }
    });
  }

  logout() {
    this.loading = true;  // Activate loading state
    this.authService.logout().subscribe({
      next: () => {
        this.userService.logout(); 
        this.router.navigate(['/login']).then(() => {
          this.loading = false;  // Deactivate loading state after navigation
          window.location.reload();
        });
      },
      error: (error) => {
        console.error('Logout failed', error);
        this.loading = false;  // Deactivate loading state if an error occurs
      }
    });
  }

  navigateTo(route: string): void {
    if (this.authService.isLoggedIn()) {
      this.router.navigate([route]);
    } else {
      this.router.navigate(['/login']);
    }
  }

  get isAdmin(): boolean {
    return this.userService.isAdmin();
  }

  get isAccountant(): boolean {
    return this.userService.isAccountant();
  }

  get isFinancialStaff(): boolean {
    return this.userService.isFinancialStaff();
  }
}
