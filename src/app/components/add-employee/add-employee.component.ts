import {Component, EventEmitter, Output} from '@angular/core';
import {EmployeeServiceService} from '../../api/employee/employee-service.service';
import {Router} from '@angular/router';
import {EmployeeModel} from '../../model/EmployeeModel';

/**
 * Written by karthik on 11-06-2019
 * This component used for adding the employee
 * Makes use of EmployeeService to call to the
 * server and updates the Employee
 * loaded when the user enters '/home/addEmployee' in the url
 */

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {

  employeeModel: EmployeeModel;

  @Output() refresh: EventEmitter<string> = new EventEmitter<string>();

  constructor(private httpService: EmployeeServiceService, private router: Router) {
    this.employeeModel = new EmployeeModel();
    this.employeeModel.positionHeld = 'Software Engineer';
  }


  submit() {
    this.httpService.addEmployee(this.employeeModel.toDTO())
      .subscribe(() => {
        this.router.navigate(['home', 'employeeList']);
      });
  }

}
