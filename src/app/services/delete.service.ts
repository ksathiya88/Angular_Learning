import {Injectable} from '@angular/core';


@Injectable()

export class DeleteService {

  delete(list: Array<any>, key: number) {

    const item = list.find((item1) => {
      return item1.key === key;
    });

    list.splice(list.indexOf(item), 1);
    return;
  }

}
