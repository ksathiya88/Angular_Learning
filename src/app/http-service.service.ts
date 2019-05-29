import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/Operators';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(public http:HttpClient) { }

  getEmployees(){
    return this.http.get('http://localhost:8080/getEmployees').pipe(map((response) => {
      //console.log("response11111",response);
    return response;
    }))
    // .subscribe((data) => {
    //      console.log("data11111",data);
    //   }
  }

  addEmployee(){
    return 

  }

  deleteEmployee() {

  } 


}
