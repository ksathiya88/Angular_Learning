/**
 * For sorting by Javascript sort Method
 * For Employee name
 */

import {Pipe, PipeTransform} from '@angular/core';
import {EmployeeModel} from '../model/EmployeeModel';

@Pipe({
  name: 'sortname'
})
export class SortnamePipe implements PipeTransform {

  transform(value: Array<EmployeeModel>, sortBy: any): any {
    if (value) {
      return value.sort((firstValue: EmployeeModel, secondValue: EmployeeModel) => {
        if (firstValue[sortBy].toLowerCase() < secondValue[sortBy].toLowerCase()) {
          return -1;
        } else {
          return 1;
        }
        return 0;
      });
    } else {
      return value;
    }
  }

}
