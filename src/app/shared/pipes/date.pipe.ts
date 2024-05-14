import { DatePipe } from '@angular/common';
import { Inject, LOCALE_ID } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat',
})
export class DateFormatPipe extends DatePipe implements PipeTransform {
  constructor(@Inject(LOCALE_ID) locale: string) {
    super(locale);
  }
  override transform(value: any): any {
    const format = '';
    value = value ? super.transform(value, format) : value;
    return value;
  }
}
