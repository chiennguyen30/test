export interface Department {
  $id: string;
  departmentName: string;
  user: any; // Hoặc một kiểu dữ liệu chính xác nếu có
  id: string;
  isDeleted: boolean;
  insertedAt: string;
  updatedAt: string;
}

// Xóa interface DepartmentResponse nếu không cần thiết nữa
// export interface DepartmentResponse {
//   $values: Department[];
// }


export enum DepartmentType {
  IT = 'IT',
  HR = 'HR',
  Finance = 'Finance',
  Communication = 'Communication',
  Marketing = 'Marketing',
  Accounting = 'Accounting'
}

