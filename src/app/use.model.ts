export interface User {
    id: string;          // ID của người dùng
    userName: string;    // Tên đăng nhập của người dùng
    email: string;       // Địa chỉ email của người dùng
    departmentName: string; // Tên phòng ban của người dùng
    position: string;    // Vị trí công việc của người dùng
    dob: Date;           // Ngày sinh của người dùng
    fullName: string;    // Tên đầy đủ của người dùng
    phoneNumber: string; // Số điện thoại của người dùng
    address: string;     // Địa chỉ của người dùng
    status: boolean;     // Trạng thái hoạt động của người dùng
    notes: string;       // Ghi chú thêm về người dùng
    description?: string;
  }
  