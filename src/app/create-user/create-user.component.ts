import { Component, OnInit } from '@angular/core';
import { User } from '../use.model';
import { Department, Position, Role} from '../../enum';
import { UserManagementService } from '../services/user-management.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.scss'
})
export class CreateUserComponent implements OnInit{
  user: User = {
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
  roles = Object.values(Role); // Convert enum to array of strings
  departments = Object.values(Department);
  positions = [
    { value: Position.FinancialExecutive, label: 'Financial Executive' },
    { value: Position.ProjectManager, label: 'Project Manager' },
    { value: Position.OfficeAssistant, label: 'Office Assistant' },
    { value: Position.SeniorExecutive, label: 'Senior Executive' },
    { value: Position.AccountingExecutive, label: 'Accounting Executive' },
    { value: Position.JuniorExecutive, label: 'Junior Executive' },
    { value: Position.Intern, label: 'Intern' }
  ];
  constructor(
    private userService: UserManagementService,
    private router: Router
  ) { }
  getStatusLabel(status: boolean): string {
    return status ? 'Active' : 'Inactive';
  }
  ngOnInit(): void { }

  createUser(): void {
    this.userService.createUser(this.user).subscribe(
      () => {
        alert('User created successfully');
        this.router.navigate(['/user-management']);
      },
      ( error: any) => {
        console.error('Error creating user:', error);
        this.router.navigate(['/user-management']);
      }
    );
  }

}
