import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {

    if (!value || value.length == 0) {
      return [];
    }
    if (args.length < 3) {
      return value;
    }
    const sortType = args[0];
    const dividendKey = args[1];
    const divisorKey = args[2];
    value.sort((a: any, b: any): any => {
      const a1 = a[dividendKey] / a[divisorKey];
      const b1 = b[dividendKey] / b[divisorKey];
      if (sortType == 1) {
        if (b1 > a1) {
          return 1;
        } else if (b1 < a1) {
          return -1;
        } else {
          return 0;
        }
      } else if (sortType == 2) {
        if (a1 > b1) {
          return 1;
        } else if (a1 < b1) {
          return -1;
        } else {
          return 0;
        }
      }

    });
    return value;
  }

}
