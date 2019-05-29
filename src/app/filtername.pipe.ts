import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtername'
})
export class FilternamePipe implements PipeTransform {

  transform(value: Array<any>, args?: any): any {
    console.log("value",value);
    console.log("args",args);
    return value.filter((employee)=>{
       return employee.name==args; 
    })
    //return null;
  }

}
