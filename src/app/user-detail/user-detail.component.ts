import { Component, OnInit } from '@angular/core';
import { UserManagementService } from '../services/user-management.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../use.model';
import { Position } from '../../enum';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  user: User | undefined;
  errorMessage: string | undefined;
  buttonText: string = 'Activate user';
  userStatus: string = 'Inactive';


  constructor(
    private userService: UserManagementService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.getUserById(id);
      }
    });
  }
  

  toggleButtonText() {
    if(this.user){
    if (this.buttonText === 'Activate user') {
      this.buttonText = 'De-Activate user';
      this.userStatus = 'Active';
      this.user.status = true; 
    } else {
      this.buttonText = 'Activate user';
      this.userStatus = 'Inactive';
      this.user.status = false;
    }
    if (this.user.id) {
      this.userService.updateUser(this.user.id, this.user).subscribe(
        response => {
          console.log('User status updated successfully');
        },
        error => {
          this.errorMessage = 'Error updating user status';
          console.error('Lỗi khi cập nhật trạng thái người dùng:', error);
        }
      );
    }
  
  }
}

  getStatusLabel(status: boolean): string {
    return status ? 'Active' : 'Inactive';
  }

  getUserById(id: string): void {
    this.userService.getUserById(id).subscribe(
      (data: User) => {this.user = data;
      this.updateButtonText();
    },
      error => {
        this.errorMessage = 'Error fetching user details';
        console.error('Lỗi khi lấy chi tiết người dùng:', error);
      }
    );
  }
  updateButtonText() {
    if (this.user) {
      this.buttonText = this.user.status ? 'De-Activate user' : 'Activate user';
      this.userStatus = this.user.status ? 'Active' : 'Inactive';
    }
  }
  
  




}
