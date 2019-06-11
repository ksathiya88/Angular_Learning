/**
 * Filter the list based on the names passed as args
 * To be used in component html
 * as "|filtername:<arg>:arg1"
 * val to be the employee name to be filtered
 */

import {Pipe, PipeTransform} from '@angular/core';
import {EmployeeModel} from '../model/EmployeeModel';

@Pipe({
  name: 'filtername'
})
export class FilternamePipe implements PipeTransform {

  transform(value: Array<EmployeeModel>, filterQuery: string, filterValue: string): any {
    if (filterValue && value) {
      return value.filter((obj) => {
        return obj[filterQuery] === filterValue.toUpperCase();
      });
    } else {
      return value;
    }
  }
}
