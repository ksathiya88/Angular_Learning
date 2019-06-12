import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DeleteService} from '../../services/delete.service';
import {EmployeeServiceService} from '../../api/employee/employee-service.service';
import {IEmployeeDTO} from '../../api/employee/employee.dto';
import {EmployeeModel} from '../../model/EmployeeModel';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
  providers: [DeleteService]
})
export class EmployeeListComponent implements OnInit {

  @Input() color: string;
  @Output() employeeClicked: EventEmitter<string> = new EventEmitter<string>();


  positionHeld: string;

  employees: Array<EmployeeModel> = [];
  sortBy = 'name';

  constructor(public http: EmployeeServiceService) {

  }

  ngOnInit() {
    this.refreshEmployee();
  }


  refreshEmployee() {
    this.employees = [];
    this.http.getEmployees().subscribe(
      (data: Array<IEmployeeDTO>) => {
        // console.log('Employees', data);
        const employeeModels = data.map((employeeDTO: IEmployeeDTO) =>
          EmployeeModel.fromDTO(employeeDTO)
        );
        this.employees = this.employees.concat(employeeModels);
      });
  }

  deleteEmployee(key: number) {
    this.http.deleteEmployee(key).subscribe(
      () => {
        this.refreshEmployee();
      });
  }
}
