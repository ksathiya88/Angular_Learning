import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/Operators";
import { Observable } from "rxjs";
import { IEmployeeDTO } from "./employee.dto";

/**
 * Written by karthik on 11-06-2019
 * Handles all the http call for the Employee
 * So all the components need to use this service
 * for making http calls
 */

@Injectable({
  providedIn: "root"
})
export class EmployeeServiceService {
  constructor(public http: HttpClient) {}

  getEmployees(): Observable<Array<IEmployeeDTO>> {
    return this.http.get("http://localhost:8081/getEmployees").pipe(
      map(response => {
        return response as Array<IEmployeeDTO>;
      })
    );
  }

  getEmployee(key): Observable<IEmployeeDTO> {
    return this.http
      .get("http://localhost:8081/getEmployee", { params: { param: key } })
      .pipe(
        map(response => {
          return response as IEmployeeDTO;
        })
      );
  }

  deleteEmployee(key): Observable<Array<IEmployeeDTO>> {
    return this.http
      .delete("http://localhost:8081/deleteEmployee", { params: { key } })
      .pipe(
        map(response => {
          return response as Array<IEmployeeDTO>;
        })
      );
  }

  addEmployee(dto: IEmployeeDTO) {
    return this.http.put("http://localhost:8081/addEmployee", dto);
  }

  authenticate = (username, password) => {
    const data = { username, password };
    return this.http.put("http://localhost:8081/authenticate", data);
  };
}
