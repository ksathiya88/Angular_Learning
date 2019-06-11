import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {EmployeeServiceService} from '../../api/employee/employee-service.service';
import {Router} from '@angular/router';
import {EmployeeModel} from '../../model/EmployeeModel';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {

  employeeModel: EmployeeModel;

  @Output() refresh: EventEmitter<string> = new EventEmitter<string>();

  constructor(private httpService: EmployeeServiceService, private router: Router) {
  }

  submit() {
    this.httpService.addEmployee(this.employeeModel.toDTO())
      .subscribe((data) => {
        this.router.navigate(['employeeList']);
      });
  }

}
