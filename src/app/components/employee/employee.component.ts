import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {EmployeeServiceService} from '../../api/employee/employee-service.service';
import {EmployeeModel} from '../../model/EmployeeModel';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  @Input() employee: EmployeeModel;
  @Output() delete: EventEmitter<number> = new EventEmitter<number>();

  constructor(public route: ActivatedRoute, public httpService: EmployeeServiceService) {

  }

  ngOnInit() {
    // console.log('routeValue', this.route.snapshot.params.key);
    const key = this.route.snapshot.params.key;
    // if key has a value
    if (key) {
      this.httpService.getEmployee(key).subscribe((emp) => {
        // console.log('employee', emp);
        this.employee = EmployeeModel.fromDTO(emp);
      });
    }
  }

  deleteFn(key: number) {
    this.delete.emit(key);
  }
}
