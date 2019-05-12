import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeleteServiceService {

  constructor() {

  }
  /**
   * 
   */
  delete(list: Array<any>, key: number) {

    let reqItem = list.find((item) => {
      return item.key == key;
    });
    list.splice(list.indexOf(reqItem), 1);
    return list;
  }



}
