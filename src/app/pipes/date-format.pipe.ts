import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {

  transform(month: number | string | undefined, format: 'month' | 'default' = 'default'): string {
    if (typeof month === 'number') {
      // Nếu month là số, chuyển đổi thành tên tháng
      if (month < 1 || month > 12) return 'N/A'; // Trả về 'N/A' nếu giá trị không hợp lệ

      const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
      ];

      const currentYear = new Date().getFullYear(); // Lấy năm hiện tại

      if (format === 'month') {
        return `${monthNames[month - 1]} ${currentYear}`; // Trả về tên tháng với năm hiện tại
      }

      // Định dạng mặc định, nếu cần
      return `${monthNames[month - 1]} ${currentYear}`;
    } else if (typeof month === 'string') {
      // Nếu month là chuỗi, sử dụng trực tiếp
      const currentYear = new Date().getFullYear(); // Lấy năm hiện tại

      return `${month} ${currentYear}`;
    }

    return 'N/A'; // Trả về 'N/A' nếu giá trị không hợp lệ
  }
}
