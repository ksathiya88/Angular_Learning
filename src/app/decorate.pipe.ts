import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name:"decorate"
})

export class Decorate implements PipeTransform{
    transform(value:any,args:any){
       if (value=="Manager") {
           return args+value+args
       }
       return value;
    }

}