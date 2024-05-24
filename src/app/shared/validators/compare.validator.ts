import { AbstractControl, ValidationErrors, NG_VALIDATORS, Validator } from '@angular/forms';
import { Directive, Input } from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[compare]',
  standalone: true,
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: CompareValidatorDirective,
      multi: true,
    },
  ],
})
export class CompareValidatorDirective implements Validator {
  @Input() compareValue: any;
  @Input() compare: string = '';
  validate(control: AbstractControl): ValidationErrors | null {
    if (control.value && (isNaN(control.value) || !this.compareFn(control.value, this.compareValue))) {
      return { compare: true };
    }
    return null;
  }
  private compareFn(value1: string, value2: string): boolean {
    let status: boolean = true;
    const iValue1: number = parseFloat(value1) ? parseFloat(value1) : 0;
    const iValue2: number = parseFloat(value2) ? parseFloat(value2) : 0;
    switch (this.compare) {
      case 'equalto':
        status = iValue1 === iValue2;
        break;
      case 'notequalto':
        status = iValue1 !== iValue2;
        break;
      case 'Lessthan':
        status = iValue1 < iValue2;
        break;
      case 'lessthanorequal':
        status = iValue1 <= iValue2;
        break;
      case 'greaterthan':
        status = iValue1 > iValue2;
        break;
      case 'greaterthanequal':
        status = iValue1 >= iValue2;
        break;
      default:
        status = true;
    }
    return status;
  }
}
