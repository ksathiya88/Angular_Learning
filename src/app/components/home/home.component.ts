import {Component, OnInit} from '@angular/core';

/**
 * Written by karthik on 11-06-2019
 * Hosts the EmployeeList and AddEmployee Componet
 * Both the EmployeeList and AddEmployee are children of this
 * Component
 * So you need to enter /home/employeeList for loading EmployeeList Component
 * And you need to enter /home/addEmployee for loading AddEmployee Component
 */


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
