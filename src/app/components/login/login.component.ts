import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../../api/employee/employee-service.service';
import { Router } from '@angular/router';

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
