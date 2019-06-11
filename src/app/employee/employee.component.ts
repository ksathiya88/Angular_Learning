import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpServiceService} from '../http-service.service';
import {Employee} from '../model/employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  @Input() employee: Employee;
  @Output() delete: EventEmitter<number> = new EventEmitter<number>();

  constructor(public route: ActivatedRoute, public httpService: HttpServiceService) {

  }

  ngOnInit() {
    console.log('routeValue', this.route.snapshot.params.key);
    const key = this.route.snapshot.params.key;
    this.httpService.getEmployee(key).subscribe((emp) => {
      console.log('employee', emp);
      this.employee = emp;
    });
  }

  deleteFn(key: number) {
    this.delete.emit(key);
  }
}
