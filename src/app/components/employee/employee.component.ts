import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { EmployeeServiceService } from "../../api/employee/employee-service.service";
import { EmployeeModel } from "../../model/EmployeeModel";

/**
 * Written by karthik on 11-06-2019
 * This component correspons to a single
 * Employee shown in the View
 * Here the employee data is sent via the
 * Input decorator from EmployeeList component
 * Whenever the User presses on the delete the
 * specifix key is sent to the EmployeeComponent
 * via Output decorator
 */

@Component({
  selector: "app-employee",
  templateUrl: "./employee.component.html",
  styleUrls: ["./employee.component.css"]
})
export class EmployeeComponent implements OnInit {
  @Input() employee: EmployeeModel;
  @Output() delete: EventEmitter<number> = new EventEmitter<number>();

  constructor(
    public route: ActivatedRoute,
    public httpService: EmployeeServiceService
  ) {}

  ngOnInit() {
    // console.log('routeValue', this.route.snapshot.params.key);
    const key = this.route.snapshot.params.key;
    // if key has a value
    if (key) {
      this.httpService.getEmployee(key).subscribe(emp => {
        // console.log('employee', emp);
        this.employee = EmployeeModel.fromDTO(emp);
      });
    }
  }

  deleteFn(key: number) {
    this.delete.emit(key);
  }
}
