import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'formattime'
})
export class FormattimePipe implements PipeTransform {

  transform(value: unknown, ...args: any[]): any {
    console.log("entered the time format pipe")
    console.log(value);

    return value;
  }

}
