import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleUppercase'
})
export class TitleUppercasePipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    return String(value).toUpperCase();
  }

}
