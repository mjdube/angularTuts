// Custom pipes which will be use like ( {{ description | summary }} )
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary',
})
export class SummaryPipe implements PipeTransform {
  //   transform(value: any, args?: any, another?: any) {}
  transform(value: any, limit?: number) {
    if (!value) return null;
    let actualLimit = limit ? limit : 50;
    return value.substr(0, actualLimit) + '...';
  }
}
