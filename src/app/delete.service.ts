import { Injectable } from '@angular/core';


@Injectable()

export class DeleteService {

    delete(list:Array<any>,key:number){

         let item = list.find((item)=>{
             return item.key == key;
         })

         list.splice(list.indexOf(item),1);
         return;
    }

}