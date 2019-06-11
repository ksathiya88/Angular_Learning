import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/Operators';
import {Observable} from 'rxjs';
import {Employee} from './model/employee';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(public http: HttpClient) {
  }

  getEmployees(): Observable<Array<Employee>> {
    return this.http.get('http://localhost:8080/getEmployees').pipe(map((response) => {
      return response as Array<Employee>;
    }));
  }

  getEmployee(key): Observable<Employee> {
    const data = {key};
    return this.http.get('http://localhost:8080/getEmployee', {params: {param: key}}).pipe(map((response) => {
      return response as Employee;
    }));
  }


  addEmployee(name, dob, positionHeld) {
    const data = {
      name,
      date_of_birth: dob,
      position_held: positionHeld
    };
    return this.http.put('http://localhost:8080/addEmployee', data);
  }

  authenticate = function (username, password) {
    const data = {username, password};
    return this.http.put('http://localhost:8080/authenticate', data);
  };
}
