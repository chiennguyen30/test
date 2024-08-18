// report-item.model.ts
// report-item.model.ts
export interface ReportItem {
  termid : number;
  termName:string;
  fileReportName: string;
  reportDate: string;
  term: string;
  department: string;
  departmentName :string;
  departmentId: number;
  uploadedBy :string;
  uploadedByName: string;
  uploadedDate: string;
  expense: string;
  costType: string; // Đảm bảo rằng 'costType' là string nếu bạn đang sử dụng nó như vậy
  unitPrice: number;
  amount: number;
  total: number;
  version: string;
  month: number;
  projectName: string;
  supplierName: string;
  pic: string;
  notes: string; // Đổi tên từ 'notes' thành 'note' nếu cần
  expenseStatus: number;
}

// Đảm bảo rằng kiểu dữ liệu đúng với API trả về
export interface ReportItemDetails {
  termid : number;
  termName:string;
  fileReportName: string;
  reportDate: string;
  term: string;
  department: string;
  expense: string;
  costType: string;
  unitPrice: number;
  amount: number;
  total: number;
  projectName: string;
  supplierName: string;
  pic: string;
  notes: string;
}

 // report-item.model.ts
export interface ApiResponse {
  $values: ReportItem[]; // Đây là kiểu dữ liệu của dữ liệu trả về từ API
}

