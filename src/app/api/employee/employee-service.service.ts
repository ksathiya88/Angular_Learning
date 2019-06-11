import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/Operators';
import {Observable} from 'rxjs';
import {IEmployeeDTO} from './employee.dto';

@Injectable({
  providedIn: 'root'
})

export class EmployeeServiceService {

  constructor(public http: HttpClient) {
  }

  getEmployees(): Observable<Array<IEmployeeDTO>> {
    return this.http.get('http://localhost:8080/getEmployees').pipe(map((response) => {
      return response as Array<IEmployeeDTO>;
    }));
  }

  getEmployee(key): Observable<IEmployeeDTO> {
    const data = {key};
    return this.http.get('http://localhost:8080/getEmployee', {params: {param: key}}).pipe(map((response) => {
      return response as IEmployeeDTO;
    }));
  }


  addEmployee(dto: IEmployeeDTO) {
    return this.http.put('http://localhost:8080/addEmployee', dto);
  }

  authenticate = (username, password) => {
    const data = {username, password};
    return this.http.put('http://localhost:8080/authenticate', data);
  }
}
