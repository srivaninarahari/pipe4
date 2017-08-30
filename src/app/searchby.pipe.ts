import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchby'
})
export class SearchbyPipe implements PipeTransform {

  transform(value: any, args?: any[]): any {
    if (value.length !== 0) {
    return value.filter((item) => item.name.startsWith(args));
    } else {
    return [];
    }
    };

}
