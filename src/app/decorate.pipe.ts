import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'decorate'
})
export class DecoratePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value=="MANAGER"){
      return args + value + args;      
    }else {
      return value;
    }
  }
}
