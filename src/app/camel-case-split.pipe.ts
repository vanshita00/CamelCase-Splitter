import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'camelCaseSplit'  
})
export class CamelCaseSplitPipe implements PipeTransform {
  transform(value: string): string {
    if (!value)
       return value;
    return value.replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase();
  }
}
