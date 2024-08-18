import { Component, OnInit } from '@angular/core';
import { User } from '../use.model';
import { UserManagementService } from '../services/user-management.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Department, Position, Role} from '../../enum';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss'] // Sửa lỗi tên tệp CSS
})
export class EditUserComponent implements OnInit {
  user: User = {  // Khởi tạo đối tượng user với giá trị mặc định
    id: '',
    userName: '',
    email: '',
    departmentName: '',
    position: '',
    dob: new Date(),
    fullName: '',
    phoneNumber: '',
    address: '',
    status: true,
    notes: ''
  };
    positions = [
    { value: Position.FinancialExecutive, label: 'Financial Executive' },
    { value: Position.ProjectManager, label: 'Project Manager' },
    { value: Position.OfficeAssistant, label: 'Office Assistant' },
    { value: Position.SeniorExecutive, label: 'Senior Executive' },
    { value: Position.AccountingExecutive, label: 'Accounting Executive' },
    { value: Position.JuniorExecutive, label: 'Junior Executive' },
    { value: Position.Intern, label: 'Intern' }
  ];
  userId: string | null = null;
  roles = Object.values(Role); // Convert enum to array of strings
  departments = Object.values(Department);


  constructor(
    private userService: UserManagementService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('id'); // Lấy ID từ URL
    if (this.userId) {
      this.loadUser(this.userId);
    }
  }

  loadUser(id: string): void {
    this.userService.getUserById(id).subscribe(
      (data: User) => {
        this.user = data;
      },
      error => {
        console.error('Error fetching user data:', error);
      }
    );
  }
  

  updateUser(): void {
    if (this.userId && this.user) {
      this.userService.updateUser(this.userId, this.user).subscribe(
        () => {
          alert('User updated successfully');
          this.router.navigate(['/user-management']);
        },
        error => {
          console.error('Error updating user:', error);
        }
      );
    }
  }
}
