import {Component, OnInit} from '@angular/core';
import {EmployeeServiceService} from '../../api/employee/employee-service.service';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../services';

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

  error: boolean;

  constructor(public httpService: EmployeeServiceService, public router: Router, private authenticationService: AuthenticationService) {
  }

  ngOnInit() {

  }

  onSubmit(form) {
    console.log('template Model', form);

    this.authenticationService.login(form.value.username, form.value.password)
    // .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['home', 'employeeList']);
        },
        error => {
          this.error = error;
          // this.loading = false;
        });
  }


}
