import {Component, OnInit} from '@angular/core';
import {EmployeeServiceService} from '../../api/employee/employee-service.service';
import {Router} from '@angular/router';

/**
 * Written by karthik on 11-06-2019
 * Provides the Login Page for the Application
 * loaded when the user enters 'login' in the url
 */

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  error: boolean;

  constructor(public httpService: EmployeeServiceService, public router: Router) { }

  ngOnInit() {

  }

  authenticate() {
    this.httpService.authenticate(this.username, this.password).subscribe(
      (request) => {
        this.error = false;
        this.router.navigate(['home', 'employeeList']);
      },
      (error) => {
        this.error = true;
      }
    );
  }


}
