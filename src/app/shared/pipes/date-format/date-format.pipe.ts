import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat', // 定义 pipe 的名称
  standalone: true
})
export class DateFormatPipe implements PipeTransform {

  // 实现 transform 方法
  transform(value: string | Date, format: string = 'yyyy-MM-dd'): string {
    if (!value) return '';

    // 使用原生 JavaScript Date 对象进行处理，或者你可以使用第三方库如 Moment.js 进行复杂的格式化
    const date = new Date(value);

    // 简单的日期格式化逻辑（这里只是一个简单示例）
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');

    if (format === 'yyyy-MM-dd') {
      return `${year}-${month}-${day}`;
    }

    // 如果想支持其他格式，可以扩展代码（这里只是做简单演示）
    return `${month}/${day}/${year}`;
  }
}
